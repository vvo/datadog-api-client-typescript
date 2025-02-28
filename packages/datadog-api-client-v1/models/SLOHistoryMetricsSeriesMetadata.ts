/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOHistoryMetricsSeriesMetadataUnit } from "./SLOHistoryMetricsSeriesMetadataUnit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Query metadata.
 */
export class SLOHistoryMetricsSeriesMetadata {
  /**
   * Query aggregator function.
   */
  "aggr"?: string;
  /**
   * Query expression.
   */
  "expression"?: string;
  /**
   * Query metric used.
   */
  "metric"?: string;
  /**
   * Query index from original combined query.
   */
  "queryIndex"?: number;
  /**
   * Query scope.
   */
  "scope"?: string;
  /**
   * An array of metric units that contains up to two unit objects.
   * For example, bytes represents one unit object and bytes per second represents two unit objects.
   * If a metric query only has one unit object, the second array element is null.
   */
  "unit"?: Array<SLOHistoryMetricsSeriesMetadataUnit>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggr: {
      baseName: "aggr",
      type: "string",
    },
    expression: {
      baseName: "expression",
      type: "string",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    queryIndex: {
      baseName: "query_index",
      type: "number",
      format: "int64",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    unit: {
      baseName: "unit",
      type: "Array<SLOHistoryMetricsSeriesMetadataUnit>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOHistoryMetricsSeriesMetadata.attributeTypeMap;
  }

  public constructor() {}
}
