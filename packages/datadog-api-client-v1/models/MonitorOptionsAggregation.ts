/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Type of aggregation performed in the monitor query.
 */
export class MonitorOptionsAggregation {
  /**
   * Group to break down the monitor on.
   */
  "groupBy"?: string;
  /**
   * Metric name used in the monitor.
   */
  "metric"?: string;
  /**
   * Metric type used in the monitor.
   */
  "type"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    groupBy: {
      baseName: "group_by",
      type: "string",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorOptionsAggregation.attributeTypeMap;
  }

  public constructor() {}
}
