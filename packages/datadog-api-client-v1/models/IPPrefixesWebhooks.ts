/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Available prefix information for the Webhook endpoints.
 */
export class IPPrefixesWebhooks {
  /**
   * List of IPv4 prefixes.
   */
  "prefixesIpv4"?: Array<string>;
  /**
   * List of IPv6 prefixes.
   */
  "prefixesIpv6"?: Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    prefixesIpv4: {
      baseName: "prefixes_ipv4",
      type: "Array<string>",
    },
    prefixesIpv6: {
      baseName: "prefixes_ipv6",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IPPrefixesWebhooks.attributeTypeMap;
  }

  public constructor() {}
}
