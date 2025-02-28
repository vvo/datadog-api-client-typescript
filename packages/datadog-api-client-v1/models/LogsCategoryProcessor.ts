/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsCategoryProcessorCategory } from "./LogsCategoryProcessorCategory";
import { LogsCategoryProcessorType } from "./LogsCategoryProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Use the Category Processor to add a new attribute (without spaces or special characters in the new attribute name)
 * to a log matching a provided search query. Use categories to create groups for an analytical view.
 * For example, URL groups, machine groups, environments, and response time buckets.
 *
 * **Notes**:
 *
 * - The syntax of the query is the one of Logs Explorer search bar.
 *   The query can be done on any log attribute or tag, whether it is a facet or not.
 *   Wildcards can also be used inside your query.
 * - Once the log has matched one of the Processor queries, it stops.
 *   Make sure they are properly ordered in case a log could match several queries.
 * - The names of the categories must be unique.
 * - Once defined in the Category Processor, you can map categories to log status using the Log Status Remapper.
 */
export class LogsCategoryProcessor {
  /**
   * Array of filters to match or not a log and their
   * corresponding `name` to assign a custom value to the log.
   */
  "categories": Array<LogsCategoryProcessorCategory>;
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Name of the target attribute which value is defined by the matching category.
   */
  "target": string;
  /**
   * Type of logs category processor.
   */
  "type": LogsCategoryProcessorType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    categories: {
      baseName: "categories",
      type: "Array<LogsCategoryProcessorCategory>",
      required: true,
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsCategoryProcessorType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsCategoryProcessor.attributeTypeMap;
  }

  public constructor() {}
}
