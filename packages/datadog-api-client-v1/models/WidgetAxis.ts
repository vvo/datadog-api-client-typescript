/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Axis controls for the widget.
 */
export class WidgetAxis {
  /**
   * True includes zero.
   */
  "includeZero"?: boolean;
  /**
   * The label of the axis to display on the graph.
   */
  "label"?: string;
  /**
   * Specifies the maximum value to show on the y-axis. It takes a number, or auto for default behavior.
   */
  "max"?: string;
  /**
   * Specifies minimum value to show on the y-axis. It takes a number, or auto for default behavior.
   */
  "min"?: string;
  /**
   * Specifies the scale type. Possible values are `linear`, `log`, `sqrt`, `pow##` (for example `pow2`, `pow0.5` etc.).
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
    label: {
      baseName: "label",
      type: "string",
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
    return WidgetAxis.attributeTypeMap;
  }

  public constructor() {}
}
