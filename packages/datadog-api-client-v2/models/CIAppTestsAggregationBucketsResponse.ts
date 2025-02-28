/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppTestsBucketResponse } from "./CIAppTestsBucketResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The query results.
 */
export class CIAppTestsAggregationBucketsResponse {
  /**
   * The list of matching buckets, one item per bucket.
   */
  "buckets"?: Array<CIAppTestsBucketResponse>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    buckets: {
      baseName: "buckets",
      type: "Array<CIAppTestsBucketResponse>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CIAppTestsAggregationBucketsResponse.attributeTypeMap;
  }

  public constructor() {}
}
