/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RoleAttributes } from "./RoleAttributes";
import { RoleResponseRelationships } from "./RoleResponseRelationships";
import { RolesType } from "./RolesType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Role object returned by the API.
 */
export class Role {
  /**
   * Attributes of the role.
   */
  "attributes"?: RoleAttributes;
  /**
   * The unique identifier of the role.
   */
  "id"?: string;
  /**
   * Relationships of the role object returned by the API.
   */
  "relationships"?: RoleResponseRelationships;
  /**
   * Roles type.
   */
  "type": RolesType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "RoleAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "RoleResponseRelationships",
    },
    type: {
      baseName: "type",
      type: "RolesType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Role.attributeTypeMap;
  }

  public constructor() {}
}
