/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsStorageTier } from "./LogsStorageTier";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The search and filter query settings
 */
export class LogsQueryFilter {
  /**
   * The minimum time for the requested logs, supports date math and regular timestamps (milliseconds).
   */
  "from"?: string;
  /**
   * For customers with multiple indexes, the indexes to search. Defaults to ['*'] which means all indexes.
   */
  "indexes"?: Array<string>;
  /**
   * The search query - following the log search syntax.
   */
  "query"?: string;
  /**
   * Specifies storage type as indexes or online-archives
   */
  "storageTier"?: LogsStorageTier;
  /**
   * The maximum time for the requested logs, supports date math and regular timestamps (milliseconds).
   */
  "to"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    from: {
      baseName: "from",
      type: "string",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    storageTier: {
      baseName: "storage_tier",
      type: "LogsStorageTier",
    },
    to: {
      baseName: "to",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsQueryFilter.attributeTypeMap;
  }

  public constructor() {}
}
