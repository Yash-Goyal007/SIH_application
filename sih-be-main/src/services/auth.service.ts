import bcrypt from "bcrypt";

import jwtUtil from "@util/jwt-util";
import { UnauthorizedError } from "@shared/errors";
import UserModel, { IUser } from "@models/user.model";
import OrganisationModel, { IOrganisation } from "@models/organisation.model";

/**
 * Login()
 *
 * @param email
 * @param password
 * @param type
 * @returns
 */
async function login(
  email: string,
  password: string,
  type: "user" | "organisation"
): Promise<any> {
  const user =
    type === "user"
      ? await UserModel.findOne({ email })
      : await OrganisationModel.findOne({ email });

  if (!user) {
    throw new UnauthorizedError();
  }
  // Check password
  const pwdPassed = await bcrypt.compare(password, user.pwdHash);
  if (!pwdPassed) {
    throw new UnauthorizedError();
  }
  // Setup Admin Cookie
  const token = await jwtUtil.sign({
    _id: user._id,
    email: user.email,
  });

  return { user, token };
}

/**
 * SignupUser()
 *
 * @param userData
 * @returns
 */
async function signupUser(userData: IUser): Promise<any> {
  const user = await UserModel.create(userData);
  console.log(user);

  const token = await jwtUtil.sign({
    _id: user._id,
    email: user.email,
  });

  return { user, token };
}

/**
 * SignupOrg()
 *
 * @param orgData
 * @returns
 */
async function signupOrg(orgData: IOrganisation): Promise<any> {
  const organisation = await OrganisationModel.create(orgData);
  console.log(organisation);
  if (!organisation) throw new UnauthorizedError();

  const token = await jwtUtil.sign({
    _id: organisation._id,
    email: organisation.email,
  });

  return { organisation, token };
}

// Export default
export default {
  login,
  signupUser,
  signupOrg,
} as const;
