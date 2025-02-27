/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserInvitationData } from "./UserInvitationData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object to invite users to join the organization.
 */
export class UserInvitationsRequest {
  /**
   * List of user invitations.
   */
  "data": Array<UserInvitationData>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<UserInvitationData>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserInvitationsRequest.attributeTypeMap;
  }

  public constructor() {}
}
