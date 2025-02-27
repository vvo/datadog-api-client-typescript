/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IPPrefixesAgents } from "./IPPrefixesAgents";
import { IPPrefixesAPI } from "./IPPrefixesAPI";
import { IPPrefixesAPM } from "./IPPrefixesAPM";
import { IPPrefixesLogs } from "./IPPrefixesLogs";
import { IPPrefixesProcess } from "./IPPrefixesProcess";
import { IPPrefixesSynthetics } from "./IPPrefixesSynthetics";
import { IPPrefixesSyntheticsPrivateLocations } from "./IPPrefixesSyntheticsPrivateLocations";
import { IPPrefixesWebhooks } from "./IPPrefixesWebhooks";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * IP ranges.
 */
export class IPRanges {
  /**
   * Available prefix information for the Agent endpoints.
   */
  "agents"?: IPPrefixesAgents;
  /**
   * Available prefix information for the API endpoints.
   */
  "api"?: IPPrefixesAPI;
  /**
   * Available prefix information for the APM endpoints.
   */
  "apm"?: IPPrefixesAPM;
  /**
   * Available prefix information for the Logs endpoints.
   */
  "logs"?: IPPrefixesLogs;
  /**
   * Date when last updated, in the form `YYYY-MM-DD-hh-mm-ss`.
   */
  "modified"?: string;
  /**
   * Available prefix information for the Process endpoints.
   */
  "process"?: IPPrefixesProcess;
  /**
   * Available prefix information for the Synthetics endpoints.
   */
  "synthetics"?: IPPrefixesSynthetics;
  /**
   * Available prefix information for the Synthetics Private Locations endpoints.
   */
  "syntheticsPrivateLocations"?: IPPrefixesSyntheticsPrivateLocations;
  /**
   * Version of the IP list.
   */
  "version"?: number;
  /**
   * Available prefix information for the Webhook endpoints.
   */
  "webhooks"?: IPPrefixesWebhooks;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    agents: {
      baseName: "agents",
      type: "IPPrefixesAgents",
    },
    api: {
      baseName: "api",
      type: "IPPrefixesAPI",
    },
    apm: {
      baseName: "apm",
      type: "IPPrefixesAPM",
    },
    logs: {
      baseName: "logs",
      type: "IPPrefixesLogs",
    },
    modified: {
      baseName: "modified",
      type: "string",
    },
    process: {
      baseName: "process",
      type: "IPPrefixesProcess",
    },
    synthetics: {
      baseName: "synthetics",
      type: "IPPrefixesSynthetics",
    },
    syntheticsPrivateLocations: {
      baseName: "synthetics-private-locations",
      type: "IPPrefixesSyntheticsPrivateLocations",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
    },
    webhooks: {
      baseName: "webhooks",
      type: "IPPrefixesWebhooks",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IPRanges.attributeTypeMap;
  }

  public constructor() {}
}
