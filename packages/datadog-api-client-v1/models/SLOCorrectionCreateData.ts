/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOCorrectionCreateRequestAttributes } from "./SLOCorrectionCreateRequestAttributes";
import { SLOCorrectionType } from "./SLOCorrectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object associated with the SLO correction to be created.
 */
export class SLOCorrectionCreateData {
  /**
   * The attribute object associated with the SLO correction to be created.
   */
  "attributes"?: SLOCorrectionCreateRequestAttributes;
  /**
   * SLO correction resource type.
   */
  "type": SLOCorrectionType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "SLOCorrectionCreateRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "SLOCorrectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOCorrectionCreateData.attributeTypeMap;
  }

  public constructor() {}
}
