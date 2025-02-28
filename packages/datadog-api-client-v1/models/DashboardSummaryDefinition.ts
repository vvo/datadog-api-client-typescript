/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardLayoutType } from "./DashboardLayoutType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Dashboard definition.
 */
export class DashboardSummaryDefinition {
  /**
   * Identifier of the dashboard author.
   */
  "authorHandle"?: string;
  /**
   * Creation date of the dashboard.
   */
  "createdAt"?: Date;
  /**
   * Description of the dashboard.
   */
  "description"?: string;
  /**
   * Dashboard identifier.
   */
  "id"?: string;
  /**
   * Whether this dashboard is read-only. If True, only the author and admins can make changes to it.
   */
  "isReadOnly"?: boolean;
  /**
   * Layout type of the dashboard.
   */
  "layoutType"?: DashboardLayoutType;
  /**
   * Modification date of the dashboard.
   */
  "modifiedAt"?: Date;
  /**
   * Title of the dashboard.
   */
  "title"?: string;
  /**
   * URL of the dashboard.
   */
  "url"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    authorHandle: {
      baseName: "author_handle",
      type: "string",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    isReadOnly: {
      baseName: "is_read_only",
      type: "boolean",
    },
    layoutType: {
      baseName: "layout_type",
      type: "DashboardLayoutType",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardSummaryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
