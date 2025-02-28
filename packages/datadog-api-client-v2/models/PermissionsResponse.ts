/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Permission } from "./Permission";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Payload with API-returned permissions.
 */
export class PermissionsResponse {
  /**
   * Array of permissions.
   */
  "data"?: Array<Permission>;

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
      type: "Array<Permission>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PermissionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
