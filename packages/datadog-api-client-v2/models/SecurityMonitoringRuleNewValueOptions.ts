/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityMonitoringRuleNewValueOptionsForgetAfter } from './SecurityMonitoringRuleNewValueOptionsForgetAfter';
import { SecurityMonitoringRuleNewValueOptionsLearningDuration } from './SecurityMonitoringRuleNewValueOptionsLearningDuration';
import { HttpFile } from '../http/http';

/**
* Options on new value rules.
*/
export class SecurityMonitoringRuleNewValueOptions {
    'forgetAfter'?: SecurityMonitoringRuleNewValueOptionsForgetAfter;
    'learningDuration'?: SecurityMonitoringRuleNewValueOptionsLearningDuration;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "forgetAfter",
            "baseName": "forgetAfter",
            "type": "SecurityMonitoringRuleNewValueOptionsForgetAfter",
            "format": ""
        },
        {
            "name": "learningDuration",
            "baseName": "learningDuration",
            "type": "SecurityMonitoringRuleNewValueOptionsLearningDuration",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SecurityMonitoringRuleNewValueOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}

