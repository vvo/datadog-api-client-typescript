/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsAggregationFunction } from "./LogsAggregationFunction";
import { LogsComputeType } from "./LogsComputeType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A compute rule to compute metrics or timeseries
 */
export class LogsCompute {
  /**
   * An aggregation function
   */
  "aggregation": LogsAggregationFunction;
  /**
   * The time buckets' size (only used for type=timeseries)
   * Defaults to a resolution of 150 points
   */
  "interval"?: string;
  /**
   * The metric to use
   */
  "metric"?: string;
  /**
   * The type of compute
   */
  "type"?: LogsComputeType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "LogsAggregationFunction",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "string",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LogsComputeType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsCompute.attributeTypeMap;
  }

  public constructor() {}
}
