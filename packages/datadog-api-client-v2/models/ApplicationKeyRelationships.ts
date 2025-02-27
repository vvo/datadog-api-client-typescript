/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToUser } from "./RelationshipToUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Resources related to the application key.
 */
export class ApplicationKeyRelationships {
  /**
   * Relationship to user.
   */
  "ownedBy"?: RelationshipToUser;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ownedBy: {
      baseName: "owned_by",
      type: "RelationshipToUser",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApplicationKeyRelationships.attributeTypeMap;
  }

  public constructor() {}
}
