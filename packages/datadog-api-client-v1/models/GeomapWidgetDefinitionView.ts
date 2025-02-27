/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The view of the world that the map should render.
 */
export class GeomapWidgetDefinitionView {
  /**
   * The 2-letter ISO code of a country to focus the map on. Or `WORLD`.
   */
  "focus": string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    focus: {
      baseName: "focus",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapWidgetDefinitionView.attributeTypeMap;
  }

  public constructor() {}
}
