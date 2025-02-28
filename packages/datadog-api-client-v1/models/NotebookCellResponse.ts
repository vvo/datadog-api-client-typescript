/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotebookCellResourceType } from "./NotebookCellResourceType";
import { NotebookCellResponseAttributes } from "./NotebookCellResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The description of a notebook cell response.
 */
export class NotebookCellResponse {
  /**
   * The attributes of a notebook cell response. Valid cell types are `markdown`, `timeseries`, `toplist`, `heatmap`, `distribution`,
   * `log_stream`. [More information on each graph visualization type.](https://docs.datadoghq.com/dashboards/widgets/)
   */
  "attributes": NotebookCellResponseAttributes;
  /**
   * Notebook cell ID.
   */
  "id": string;
  /**
   * Type of the Notebook Cell resource.
   */
  "type": NotebookCellResourceType;

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
      type: "NotebookCellResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotebookCellResourceType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookCellResponse.attributeTypeMap;
  }

  public constructor() {}
}
