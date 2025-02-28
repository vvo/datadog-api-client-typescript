/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Links attributes.
 */
export class AuditLogsResponseLinks {
  /**
   * Link for the next set of results. Note that the request can also be made using the
   * POST endpoint.
   */
  "next"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    next: {
      baseName: "next",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuditLogsResponseLinks.attributeTypeMap;
  }

  public constructor() {}
}
