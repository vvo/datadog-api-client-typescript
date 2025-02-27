/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudWorkloadSecurityAgentRuleData } from "./CloudWorkloadSecurityAgentRuleData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response object that includes an Agent rule.
 */
export class CloudWorkloadSecurityAgentRuleResponse {
  /**
   * Object for a single Agent rule.
   */
  "data"?: CloudWorkloadSecurityAgentRuleData;

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
      type: "CloudWorkloadSecurityAgentRuleData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudWorkloadSecurityAgentRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
