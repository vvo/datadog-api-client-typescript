/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { Log } from "./Log";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object with all logs matching the request and pagination information.
 */
export class LogsListResponse {
  /**
   * Array of logs matching the request and the `nextLogId` if sent.
   */
  "logs"?: Array<Log>;
  /**
   * Hash identifier of the next log to return in the list.
   * This parameter is used for the pagination feature.
   */
  "nextLogId"?: string;
  /**
   * Status of the response.
   */
  "status"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    logs: {
      baseName: "logs",
      type: "Array<Log>",
    },
    nextLogId: {
      baseName: "nextLogId",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
