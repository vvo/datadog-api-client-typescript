/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsMetricCreateAttributes } from "./LogsMetricCreateAttributes";
import { LogsMetricType } from "./LogsMetricType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new log-based metric properties.
 */
export class LogsMetricCreateData {
  /**
   * The object describing the Datadog log-based metric to create.
   */
  "attributes": LogsMetricCreateAttributes;
  /**
   * The name of the log-based metric.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be logs_metrics.
   */
  "type": LogsMetricType;

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
      type: "LogsMetricCreateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsMetricType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsMetricCreateData.attributeTypeMap;
  }

  public constructor() {}
}
