/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SunburstWidgetDefinitionType } from "./SunburstWidgetDefinitionType";
import { SunburstWidgetLegend } from "./SunburstWidgetLegend";
import { SunburstWidgetRequest } from "./SunburstWidgetRequest";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Sunbursts are spot on to highlight how groups contribute to the total of a query.
 */
export class SunburstWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Show the total value in this widget.
   */
  "hideTotal"?: boolean;
  /**
   * Configuration of the legend.
   */
  "legend"?: SunburstWidgetLegend;
  /**
   * List of sunburst widget requests.
   */
  "requests": Array<SunburstWidgetRequest>;
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * Title of your widget.
   */
  "title"?: string;
  /**
   * How to align the text on the widget.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  /**
   * Type of the Sunburst widget.
   */
  "type": SunburstWidgetDefinitionType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    hideTotal: {
      baseName: "hide_total",
      type: "boolean",
    },
    legend: {
      baseName: "legend",
      type: "SunburstWidgetLegend",
    },
    requests: {
      baseName: "requests",
      type: "Array<SunburstWidgetRequest>",
      required: true,
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
    },
    titleSize: {
      baseName: "title_size",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SunburstWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SunburstWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
