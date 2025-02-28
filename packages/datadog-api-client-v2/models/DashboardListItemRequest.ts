/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardType } from "./DashboardType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A dashboard within a list.
 */
export class DashboardListItemRequest {
  /**
   * ID of the dashboard.
   */
  "id": string;
  /**
   * The type of the dashboard.
   */
  "type": DashboardType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DashboardType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardListItemRequest.attributeTypeMap;
  }

  public constructor() {}
}
