/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes used to update an application Key.
 */
export class ApplicationKeyUpdateAttributes {
  /**
   * Name of the application key.
   */
  "name"?: string;
  /**
   * Array of scopes to grant the application key. This feature is in private beta, please contact Datadog support to enable scopes for your application keys.
   */
  "scopes"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
    },
    scopes: {
      baseName: "scopes",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApplicationKeyUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
