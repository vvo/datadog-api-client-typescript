/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToIncidentIntegrationMetadataData } from "./RelationshipToIncidentIntegrationMetadataData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A relationship reference for multiple integration metadata objects.
 */
export class RelationshipToIncidentIntegrationMetadatas {
  /**
   * The integration metadata relationship array
   */
  "data": Array<RelationshipToIncidentIntegrationMetadataData>;

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
      type: "Array<RelationshipToIncidentIntegrationMetadataData>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToIncidentIntegrationMetadatas.attributeTypeMap;
  }

  public constructor() {}
}
