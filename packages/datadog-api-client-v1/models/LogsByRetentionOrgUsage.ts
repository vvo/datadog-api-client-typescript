/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsRetentionSumUsage } from "./LogsRetentionSumUsage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Indexed logs usage by retention for a single organization.
 */
export class LogsByRetentionOrgUsage {
  /**
   * Indexed logs usage for each active retention for the organization.
   */
  "usage"?: Array<LogsRetentionSumUsage>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    usage: {
      baseName: "usage",
      type: "Array<LogsRetentionSumUsage>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsByRetentionOrgUsage.attributeTypeMap;
  }

  public constructor() {}
}
