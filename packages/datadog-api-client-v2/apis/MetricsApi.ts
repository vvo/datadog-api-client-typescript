import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  getServer,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { IntakePayloadAccepted } from "../models/IntakePayloadAccepted";
import { MetricAllTagsResponse } from "../models/MetricAllTagsResponse";
import { MetricBulkTagConfigCreateRequest } from "../models/MetricBulkTagConfigCreateRequest";
import { MetricBulkTagConfigDeleteRequest } from "../models/MetricBulkTagConfigDeleteRequest";
import { MetricBulkTagConfigResponse } from "../models/MetricBulkTagConfigResponse";
import { MetricContentEncoding } from "../models/MetricContentEncoding";
import { MetricEstimateResponse } from "../models/MetricEstimateResponse";
import { MetricPayload } from "../models/MetricPayload";
import { MetricsAndMetricTagConfigurationsResponse } from "../models/MetricsAndMetricTagConfigurationsResponse";
import { MetricSuggestedTagsAndAggregationsResponse } from "../models/MetricSuggestedTagsAndAggregationsResponse";
import { MetricTagConfigurationCreateRequest } from "../models/MetricTagConfigurationCreateRequest";
import { MetricTagConfigurationMetricTypes } from "../models/MetricTagConfigurationMetricTypes";
import { MetricTagConfigurationResponse } from "../models/MetricTagConfigurationResponse";
import { MetricTagConfigurationUpdateRequest } from "../models/MetricTagConfigurationUpdateRequest";
import { MetricVolumesResponse } from "../models/MetricVolumesResponse";

export class MetricsApiRequestFactory extends BaseAPIRequestFactory {
  public async createBulkTagsMetricsConfiguration(
    body: MetricBulkTagConfigCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createBulkTagsMetricsConfiguration");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/config/bulk-tags";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.MetricsApi.createBulkTagsMetricsConfiguration"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "MetricBulkTagConfigCreateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async createTagConfiguration(
    metricName: string,
    body: MetricTagConfigurationCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "createTagConfiguration");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createTagConfiguration");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/tags".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.MetricsApi.createTagConfiguration"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "MetricTagConfigurationCreateRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteBulkTagsMetricsConfiguration(
    body: MetricBulkTagConfigDeleteRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteBulkTagsMetricsConfiguration");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/config/bulk-tags";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.MetricsApi.deleteBulkTagsMetricsConfiguration"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "MetricBulkTagConfigDeleteRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteTagConfiguration(
    metricName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "deleteTagConfiguration");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/tags".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.MetricsApi.deleteTagConfiguration"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "*/*");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async estimateMetricsOutputSeries(
    metricName: string,
    filterGroups?: string,
    filterHoursAgo?: number,
    filterNumAggregations?: number,
    filterPct?: boolean,
    filterTimespanH?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "estimateMetricsOutputSeries");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/estimate".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.MetricsApi.estimateMetricsOutputSeries"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterGroups !== undefined) {
      requestContext.setQueryParam(
        "filter[groups]",
        ObjectSerializer.serialize(filterGroups, "string", "")
      );
    }
    if (filterHoursAgo !== undefined) {
      requestContext.setQueryParam(
        "filter[hours_ago]",
        ObjectSerializer.serialize(filterHoursAgo, "number", "int32")
      );
    }
    if (filterNumAggregations !== undefined) {
      requestContext.setQueryParam(
        "filter[num_aggregations]",
        ObjectSerializer.serialize(filterNumAggregations, "number", "int32")
      );
    }
    if (filterPct !== undefined) {
      requestContext.setQueryParam(
        "filter[pct]",
        ObjectSerializer.serialize(filterPct, "boolean", "")
      );
    }
    if (filterTimespanH !== undefined) {
      requestContext.setQueryParam(
        "filter[timespan_h]",
        ObjectSerializer.serialize(filterTimespanH, "number", "int32")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listActiveMetricConfigurations(
    metricName: string,
    windowSeconds?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "listActiveMetricConfigurations");
    }

    // Path Params
    const localVarPath =
      "/api/v2/metrics/{metric_name}/active-configurations".replace(
        "{metric_name}",
        encodeURIComponent(String(metricName))
      );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.MetricsApi.listActiveMetricConfigurations"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (windowSeconds !== undefined) {
      requestContext.setQueryParam(
        "window[seconds]",
        ObjectSerializer.serialize(windowSeconds, "number", "int64")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listTagConfigurationByName(
    metricName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "listTagConfigurationByName");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/tags".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.MetricsApi.listTagConfigurationByName"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listTagConfigurations(
    filterConfigured?: boolean,
    filterTagsConfigured?: string,
    filterMetricType?: MetricTagConfigurationMetricTypes,
    filterIncludePercentiles?: boolean,
    filterQueried?: boolean,
    filterTags?: string,
    windowSeconds?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v2/metrics";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.MetricsApi.listTagConfigurations"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (filterConfigured !== undefined) {
      requestContext.setQueryParam(
        "filter[configured]",
        ObjectSerializer.serialize(filterConfigured, "boolean", "")
      );
    }
    if (filterTagsConfigured !== undefined) {
      requestContext.setQueryParam(
        "filter[tags_configured]",
        ObjectSerializer.serialize(filterTagsConfigured, "string", "")
      );
    }
    if (filterMetricType !== undefined) {
      requestContext.setQueryParam(
        "filter[metric_type]",
        ObjectSerializer.serialize(
          filterMetricType,
          "MetricTagConfigurationMetricTypes",
          ""
        )
      );
    }
    if (filterIncludePercentiles !== undefined) {
      requestContext.setQueryParam(
        "filter[include_percentiles]",
        ObjectSerializer.serialize(filterIncludePercentiles, "boolean", "")
      );
    }
    if (filterQueried !== undefined) {
      requestContext.setQueryParam(
        "filter[queried]",
        ObjectSerializer.serialize(filterQueried, "boolean", "")
      );
    }
    if (filterTags !== undefined) {
      requestContext.setQueryParam(
        "filter[tags]",
        ObjectSerializer.serialize(filterTags, "string", "")
      );
    }
    if (windowSeconds !== undefined) {
      requestContext.setQueryParam(
        "window[seconds]",
        ObjectSerializer.serialize(windowSeconds, "number", "int64")
      );
    }

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listTagsByMetricName(
    metricName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "listTagsByMetricName");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/all-tags".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.MetricsApi.listTagsByMetricName"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listVolumesByMetricName(
    metricName: string,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "listVolumesByMetricName");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/volumes".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.MetricsApi.listVolumesByMetricName"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "AuthZ",
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async submitMetrics(
    body: MetricPayload,
    contentEncoding?: MetricContentEncoding,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "submitMetrics");
    }

    // Path Params
    const localVarPath = "/api/v2/series";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.MetricsApi.submitMetrics"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Header Params
    if (contentEncoding !== undefined) {
      requestContext.setHeaderParam(
        "Content-Encoding",
        ObjectSerializer.serialize(contentEncoding, "MetricContentEncoding", "")
      );
    }

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "MetricPayload", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, ["apiKeyAuth"]);

    return requestContext;
  }

  public async updateTagConfiguration(
    metricName: string,
    body: MetricTagConfigurationUpdateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'metricName' is not null or undefined
    if (metricName === null || metricName === undefined) {
      throw new RequiredError("metricName", "updateTagConfiguration");
    }

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateTagConfiguration");
    }

    // Path Params
    const localVarPath = "/api/v2/metrics/{metric_name}/tags".replace(
      "{metric_name}",
      encodeURIComponent(String(metricName))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v2.MetricsApi.updateTagConfiguration"
    ).makeRequestContext(localVarPath, HttpMethod.PATCH);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        body,
        "MetricTagConfigurationUpdateRequest",
        ""
      ),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class MetricsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createBulkTagsMetricsConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createBulkTagsMetricsConfiguration(
    response: ResponseContext
  ): Promise<MetricBulkTagConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 202) {
      const body: MetricBulkTagConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricBulkTagConfigResponse"
      ) as MetricBulkTagConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricBulkTagConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricBulkTagConfigResponse",
        ""
      ) as MetricBulkTagConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createTagConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createTagConfiguration(
    response: ResponseContext
  ): Promise<MetricTagConfigurationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 201) {
      const body: MetricTagConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricTagConfigurationResponse"
      ) as MetricTagConfigurationResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 409 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricTagConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricTagConfigurationResponse",
        ""
      ) as MetricTagConfigurationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteBulkTagsMetricsConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteBulkTagsMetricsConfiguration(
    response: ResponseContext
  ): Promise<MetricBulkTagConfigResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 202) {
      const body: MetricBulkTagConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricBulkTagConfigResponse"
      ) as MetricBulkTagConfigResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricBulkTagConfigResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricBulkTagConfigResponse",
        ""
      ) as MetricBulkTagConfigResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteTagConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteTagConfiguration(
    response: ResponseContext
  ): Promise<void> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 204) {
      return;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        ""
      ) as void;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to estimateMetricsOutputSeries
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async estimateMetricsOutputSeries(
    response: ResponseContext
  ): Promise<MetricEstimateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: MetricEstimateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricEstimateResponse"
      ) as MetricEstimateResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricEstimateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricEstimateResponse",
        ""
      ) as MetricEstimateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listActiveMetricConfigurations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listActiveMetricConfigurations(
    response: ResponseContext
  ): Promise<MetricSuggestedTagsAndAggregationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: MetricSuggestedTagsAndAggregationsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MetricSuggestedTagsAndAggregationsResponse"
        ) as MetricSuggestedTagsAndAggregationsResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricSuggestedTagsAndAggregationsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MetricSuggestedTagsAndAggregationsResponse",
          ""
        ) as MetricSuggestedTagsAndAggregationsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listTagConfigurationByName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagConfigurationByName(
    response: ResponseContext
  ): Promise<MetricTagConfigurationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: MetricTagConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricTagConfigurationResponse"
      ) as MetricTagConfigurationResponse;
      return body;
    }
    if (
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricTagConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricTagConfigurationResponse",
        ""
      ) as MetricTagConfigurationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listTagConfigurations
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagConfigurations(
    response: ResponseContext
  ): Promise<MetricsAndMetricTagConfigurationsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: MetricsAndMetricTagConfigurationsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MetricsAndMetricTagConfigurationsResponse"
        ) as MetricsAndMetricTagConfigurationsResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricsAndMetricTagConfigurationsResponse =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "MetricsAndMetricTagConfigurationsResponse",
          ""
        ) as MetricsAndMetricTagConfigurationsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listTagsByMetricName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listTagsByMetricName(
    response: ResponseContext
  ): Promise<MetricAllTagsResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: MetricAllTagsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricAllTagsResponse"
      ) as MetricAllTagsResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricAllTagsResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricAllTagsResponse",
        ""
      ) as MetricAllTagsResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listVolumesByMetricName
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listVolumesByMetricName(
    response: ResponseContext
  ): Promise<MetricVolumesResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: MetricVolumesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricVolumesResponse"
      ) as MetricVolumesResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 404 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricVolumesResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricVolumesResponse",
        ""
      ) as MetricVolumesResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to submitMetrics
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async submitMetrics(
    response: ResponseContext
  ): Promise<IntakePayloadAccepted> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 202) {
      const body: IntakePayloadAccepted = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IntakePayloadAccepted"
      ) as IntakePayloadAccepted;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 408 ||
      response.httpStatusCode == 413 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: IntakePayloadAccepted = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "IntakePayloadAccepted",
        ""
      ) as IntakePayloadAccepted;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateTagConfiguration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateTagConfiguration(
    response: ResponseContext
  ): Promise<MetricTagConfigurationResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: MetricTagConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricTagConfigurationResponse"
      ) as MetricTagConfigurationResponse;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 422 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: MetricTagConfigurationResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "MetricTagConfigurationResponse",
        ""
      ) as MetricTagConfigurationResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface MetricsApiCreateBulkTagsMetricsConfigurationRequest {
  /**
   * @type MetricBulkTagConfigCreateRequest
   */
  body: MetricBulkTagConfigCreateRequest;
}

export interface MetricsApiCreateTagConfigurationRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
  /**
   * @type MetricTagConfigurationCreateRequest
   */
  body: MetricTagConfigurationCreateRequest;
}

export interface MetricsApiDeleteBulkTagsMetricsConfigurationRequest {
  /**
   * @type MetricBulkTagConfigDeleteRequest
   */
  body: MetricBulkTagConfigDeleteRequest;
}

export interface MetricsApiDeleteTagConfigurationRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiEstimateMetricsOutputSeriesRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
  /**
   * Filtered tag keys that the metric is configured to query with.
   * @type string
   */
  filterGroups?: string;
  /**
   * The number of hours of look back (from now) to estimate cardinality with.
   * @type number
   */
  filterHoursAgo?: number;
  /**
   * The number of aggregations that a `count`, `rate`, or `gauge` metric is configured to use. Max number of aggregation combos is 9.
   * @type number
   */
  filterNumAggregations?: number;
  /**
   * A boolean, for distribution metrics only, to estimate cardinality if the metric includes additional percentile aggregators.
   * @type boolean
   */
  filterPct?: boolean;
  /**
   * A window, in hours, from the look back to estimate cardinality with.
   * @type number
   */
  filterTimespanH?: number;
}

export interface MetricsApiListActiveMetricConfigurationsRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
  /**
   * The number of seconds of look back (from now).
   * Default value is 604,800 (1 week), minimum value is 7200 (2 hours), maximum value is 2,630,000 (1 month).
   * @type number
   */
  windowSeconds?: number;
}

export interface MetricsApiListTagConfigurationByNameRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiListTagConfigurationsRequest {
  /**
   * Filter custom metrics that have configured tags.
   * @type boolean
   */
  filterConfigured?: boolean;
  /**
   * Filter tag configurations by configured tags.
   * @type string
   */
  filterTagsConfigured?: string;
  /**
   * Filter metrics by metric type.
   * @type MetricTagConfigurationMetricTypes
   */
  filterMetricType?: MetricTagConfigurationMetricTypes;
  /**
   * Filter distributions with additional percentile
   * aggregations enabled or disabled.
   * @type boolean
   */
  filterIncludePercentiles?: boolean;
  /**
   * Filter custom metrics that have or have not been queried in the specified window[seconds].
   * If no window is provided or the window is less than 2 hours, a default of 2 hours will be applied.
   * @type boolean
   */
  filterQueried?: boolean;
  /**
   * Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions.
   * Can only be combined with the filter[queried] filter.
   * @type string
   */
  filterTags?: string;
  /**
   * The number of seconds of look back (from now) to apply to a filter[tag] or filter[queried] query.
   * Defaults value is 3600 (1 hour), maximum value is 1,209,600 (2 weeks).
   * @type number
   */
  windowSeconds?: number;
}

export interface MetricsApiListTagsByMetricNameRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiListVolumesByMetricNameRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiSubmitMetricsRequest {
  /**
   * @type MetricPayload
   */
  body: MetricPayload;
  /**
   * HTTP header used to compress the media-type.
   * @type MetricContentEncoding
   */
  contentEncoding?: MetricContentEncoding;
}

export interface MetricsApiUpdateTagConfigurationRequest {
  /**
   * The name of the metric.
   * @type string
   */
  metricName: string;
  /**
   * @type MetricTagConfigurationUpdateRequest
   */
  body: MetricTagConfigurationUpdateRequest;
}

export class MetricsApi {
  private requestFactory: MetricsApiRequestFactory;
  private responseProcessor: MetricsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: MetricsApiRequestFactory,
    responseProcessor?: MetricsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new MetricsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new MetricsApiResponseProcessor();
  }

  /**
   * Create and define a list of queryable tag keys for a set of existing count, gauge, rate, and distribution metrics.
   * Metrics are selected by passing a metric name prefix. Use the Delete method of this API path to remove tag configurations.
   * Results can be sent to a set of account email addresses, just like the same operation in the Datadog web app.
   * If multiple calls include the same metric, the last configuration applied (not by submit order) is used, do not
   * expect deterministic ordering of concurrent calls.
   * Can only be used with application keys of users with the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public createBulkTagsMetricsConfiguration(
    param: MetricsApiCreateBulkTagsMetricsConfigurationRequest,
    options?: Configuration
  ): Promise<MetricBulkTagConfigResponse> {
    const requestContextPromise =
      this.requestFactory.createBulkTagsMetricsConfiguration(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createBulkTagsMetricsConfiguration(
            responseContext
          );
        });
    });
  }

  /**
   * Create and define a list of queryable tag keys for an existing count/gauge/rate/distribution metric.
   * Optionally, include percentile aggregations on any distribution metric or configure custom aggregations
   * on any count, rate, or gauge metric.
   * Can only be used with application keys of users with the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public createTagConfiguration(
    param: MetricsApiCreateTagConfigurationRequest,
    options?: Configuration
  ): Promise<MetricTagConfigurationResponse> {
    const requestContextPromise = this.requestFactory.createTagConfiguration(
      param.metricName,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createTagConfiguration(responseContext);
        });
    });
  }

  /**
   * Delete all custom lists of queryable tag keys for a set of existing count, gauge, rate, and distribution metrics.
   * Metrics are selected by passing a metric name prefix.
   * Results can be sent to a set of account email addresses, just like the same operation in the Datadog web app.
   * Can only be used with application keys of users with the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public deleteBulkTagsMetricsConfiguration(
    param: MetricsApiDeleteBulkTagsMetricsConfigurationRequest,
    options?: Configuration
  ): Promise<MetricBulkTagConfigResponse> {
    const requestContextPromise =
      this.requestFactory.deleteBulkTagsMetricsConfiguration(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteBulkTagsMetricsConfiguration(
            responseContext
          );
        });
    });
  }

  /**
   * Deletes a metric's tag configuration. Can only be used with application
   * keys from users with the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public deleteTagConfiguration(
    param: MetricsApiDeleteTagConfigurationRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteTagConfiguration(
      param.metricName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTagConfiguration(responseContext);
        });
    });
  }

  /**
   * Returns the estimated cardinality for a metric with a given tag, percentile and number of aggregations configuration using Metrics without Limits&trade;.
   * @param param The request object
   */
  public estimateMetricsOutputSeries(
    param: MetricsApiEstimateMetricsOutputSeriesRequest,
    options?: Configuration
  ): Promise<MetricEstimateResponse> {
    const requestContextPromise =
      this.requestFactory.estimateMetricsOutputSeries(
        param.metricName,
        param.filterGroups,
        param.filterHoursAgo,
        param.filterNumAggregations,
        param.filterPct,
        param.filterTimespanH,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.estimateMetricsOutputSeries(
            responseContext
          );
        });
    });
  }

  /**
   * List tags and aggregations that are actively queried on dashboards and monitors for a given metric name.
   * @param param The request object
   */
  public listActiveMetricConfigurations(
    param: MetricsApiListActiveMetricConfigurationsRequest,
    options?: Configuration
  ): Promise<MetricSuggestedTagsAndAggregationsResponse> {
    const requestContextPromise =
      this.requestFactory.listActiveMetricConfigurations(
        param.metricName,
        param.windowSeconds,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listActiveMetricConfigurations(
            responseContext
          );
        });
    });
  }

  /**
   * Returns the tag configuration for the given metric name.
   * @param param The request object
   */
  public listTagConfigurationByName(
    param: MetricsApiListTagConfigurationByNameRequest,
    options?: Configuration
  ): Promise<MetricTagConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.listTagConfigurationByName(param.metricName, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagConfigurationByName(
            responseContext
          );
        });
    });
  }

  /**
   * Returns all metrics that can be configured in the Metrics Summary page or with Metrics without Limits™ (matching additional filters if specified).
   * @param param The request object
   */
  public listTagConfigurations(
    param: MetricsApiListTagConfigurationsRequest = {},
    options?: Configuration
  ): Promise<MetricsAndMetricTagConfigurationsResponse> {
    const requestContextPromise = this.requestFactory.listTagConfigurations(
      param.filterConfigured,
      param.filterTagsConfigured,
      param.filterMetricType,
      param.filterIncludePercentiles,
      param.filterQueried,
      param.filterTags,
      param.windowSeconds,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagConfigurations(responseContext);
        });
    });
  }

  /**
   * View indexed tag key-value pairs for a given metric name.
   * @param param The request object
   */
  public listTagsByMetricName(
    param: MetricsApiListTagsByMetricNameRequest,
    options?: Configuration
  ): Promise<MetricAllTagsResponse> {
    const requestContextPromise = this.requestFactory.listTagsByMetricName(
      param.metricName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTagsByMetricName(responseContext);
        });
    });
  }

  /**
   * View distinct metrics volumes for the given metric name.
   *
   * Custom metrics generated in-app from other products will return `null` for ingested volumes.
   * @param param The request object
   */
  public listVolumesByMetricName(
    param: MetricsApiListVolumesByMetricNameRequest,
    options?: Configuration
  ): Promise<MetricVolumesResponse> {
    const requestContextPromise = this.requestFactory.listVolumesByMetricName(
      param.metricName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listVolumesByMetricName(
            responseContext
          );
        });
    });
  }

  /**
   * The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards.
   * The maximum payload size is 500 kilobytes (512000 bytes). Compressed payloads must have a decompressed size of less than 5 megabytes (5242880 bytes).
   *
   * If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:
   *
   * - 64 bits for the timestamp
   * - 64 bits for the value
   * - 20 bytes for the metric names
   * - 50 bytes for the timeseries
   * - The full payload is approximately 100 bytes.
   *
   * Host name is one of the resources in the Resources field.
   * @param param The request object
   */
  public submitMetrics(
    param: MetricsApiSubmitMetricsRequest,
    options?: Configuration
  ): Promise<IntakePayloadAccepted> {
    const requestContextPromise = this.requestFactory.submitMetrics(
      param.body,
      param.contentEncoding,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.submitMetrics(responseContext);
        });
    });
  }

  /**
   * Update the tag configuration of a metric or percentile aggregations of a distribution metric or custom aggregations
   * of a count, rate, or gauge metric.
   * Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
   * @param param The request object
   */
  public updateTagConfiguration(
    param: MetricsApiUpdateTagConfigurationRequest,
    options?: Configuration
  ): Promise<MetricTagConfigurationResponse> {
    const requestContextPromise = this.requestFactory.updateTagConfiguration(
      param.metricName,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTagConfiguration(responseContext);
        });
    });
  }
}
