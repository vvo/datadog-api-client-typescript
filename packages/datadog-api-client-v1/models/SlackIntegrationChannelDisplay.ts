/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration options for what is shown in an alert event message.
 */
export class SlackIntegrationChannelDisplay {
  /**
   * Show the main body of the alert event.
   */
  "message"?: boolean;
  /**
   * Show the list of @-handles in the alert event.
   */
  "notified"?: boolean;
  /**
   * Show the alert event's snapshot image.
   */
  "snapshot"?: boolean;
  /**
   * Show the scopes on which the monitor alerted.
   */
  "tags"?: boolean;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    message: {
      baseName: "message",
      type: "boolean",
    },
    notified: {
      baseName: "notified",
      type: "boolean",
    },
    snapshot: {
      baseName: "snapshot",
      type: "boolean",
    },
    tags: {
      baseName: "tags",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SlackIntegrationChannelDisplay.attributeTypeMap;
  }

  public constructor() {}
}
