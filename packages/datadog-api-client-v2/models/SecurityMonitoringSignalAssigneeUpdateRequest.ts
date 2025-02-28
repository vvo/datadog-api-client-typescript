/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalAssigneeUpdateData } from "./SecurityMonitoringSignalAssigneeUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for changing the assignee of a given security monitoring signal.
 */
export class SecurityMonitoringSignalAssigneeUpdateRequest {
  /**
   * Data containing the patch for changing the assignee of a signal.
   */
  "data": SecurityMonitoringSignalAssigneeUpdateData;

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
      type: "SecurityMonitoringSignalAssigneeUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalAssigneeUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
