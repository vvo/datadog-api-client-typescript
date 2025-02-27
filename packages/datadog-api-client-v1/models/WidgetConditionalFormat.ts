/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetComparator } from "./WidgetComparator";
import { WidgetPalette } from "./WidgetPalette";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Define a conditional format for the widget.
 */
export class WidgetConditionalFormat {
  /**
   * Comparator to apply.
   */
  "comparator": WidgetComparator;
  /**
   * Color palette to apply to the background, same values available as palette.
   */
  "customBgColor"?: string;
  /**
   * Color palette to apply to the foreground, same values available as palette.
   */
  "customFgColor"?: string;
  /**
   * True hides values.
   */
  "hideValue"?: boolean;
  /**
   * Displays an image as the background.
   */
  "imageUrl"?: string;
  /**
   * Metric from the request to correlate this conditional format with.
   */
  "metric"?: string;
  /**
   * Color palette to apply.
   */
  "palette": WidgetPalette;
  /**
   * Defines the displayed timeframe.
   */
  "timeframe"?: string;
  /**
   * Value for the comparator.
   */
  "value": number;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    comparator: {
      baseName: "comparator",
      type: "WidgetComparator",
      required: true,
    },
    customBgColor: {
      baseName: "custom_bg_color",
      type: "string",
    },
    customFgColor: {
      baseName: "custom_fg_color",
      type: "string",
    },
    hideValue: {
      baseName: "hide_value",
      type: "boolean",
    },
    imageUrl: {
      baseName: "image_url",
      type: "string",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    palette: {
      baseName: "palette",
      type: "WidgetPalette",
      required: true,
    },
    timeframe: {
      baseName: "timeframe",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetConditionalFormat.attributeTypeMap;
  }

  public constructor() {}
}
