/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * X Axis controls for the distribution widget.
 */
export class DistributionWidgetXAxis {
  /**
   * True includes zero.
   */
  "includeZero"?: boolean;
  /**
   * Specifies maximum value to show on the x-axis. It takes a number, percentile (p90 === 90th percentile), or auto for default behavior.
   */
  "max"?: string;
  /**
   * Specifies minimum value to show on the x-axis. It takes a number, percentile (p90 === 90th percentile), or auto for default behavior.
   */
  "min"?: string;
  /**
   * Specifies the scale type. Possible values are `linear`.
   */
  "scale"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    includeZero: {
      baseName: "include_zero",
      type: "boolean",
    },
    max: {
      baseName: "max",
      type: "string",
    },
    min: {
      baseName: "min",
      type: "string",
    },
    scale: {
      baseName: "scale",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DistributionWidgetXAxis.attributeTypeMap;
  }

  public constructor() {}
}
