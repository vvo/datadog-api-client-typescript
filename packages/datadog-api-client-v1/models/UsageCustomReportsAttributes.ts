/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response containing attributes for custom reports.
 */
export class UsageCustomReportsAttributes {
  /**
   * The date the specified custom report was computed.
   */
  "computedOn"?: string;
  /**
   * The ending date of custom report.
   */
  "endDate"?: string;
  /**
   * size
   */
  "size"?: number;
  /**
   * The starting date of custom report.
   */
  "startDate"?: string;
  /**
   * A list of tags to apply to custom reports.
   */
  "tags"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    computedOn: {
      baseName: "computed_on",
      type: "string",
    },
    endDate: {
      baseName: "end_date",
      type: "string",
    },
    size: {
      baseName: "size",
      type: "number",
      format: "int64",
    },
    startDate: {
      baseName: "start_date",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageCustomReportsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
