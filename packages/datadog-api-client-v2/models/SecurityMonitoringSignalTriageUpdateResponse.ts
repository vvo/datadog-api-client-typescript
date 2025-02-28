/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalTriageUpdateData } from "./SecurityMonitoringSignalTriageUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response returned after all triage operations, containing the updated signal triage data.
 */
export class SecurityMonitoringSignalTriageUpdateResponse {
  /**
   * Data containing the updated triage attributes of the signal.
   */
  "data": SecurityMonitoringSignalTriageUpdateData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "SecurityMonitoringSignalTriageUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalTriageUpdateResponse.attributeTypeMap;
  }

  public constructor() {}
}
