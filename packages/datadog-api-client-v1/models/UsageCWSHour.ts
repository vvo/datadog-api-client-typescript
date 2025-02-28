/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Cloud Workload Security usage for a given organization for a given hour.
 */
export class UsageCWSHour {
  /**
   * The total number of Cloud Workload Security container hours from the start of the given hour’s month until the given hour.
   */
  "cwsContainerCount"?: number;
  /**
   * The total number of Cloud Workload Security host hours from the start of the given hour’s month until the given hour.
   */
  "cwsHostCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cwsContainerCount: {
      baseName: "cws_container_count",
      type: "number",
      format: "int64",
    },
    cwsHostCount: {
      baseName: "cws_host_count",
      type: "number",
      format: "int64",
    },
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageCWSHour.attributeTypeMap;
  }

  public constructor() {}
}
