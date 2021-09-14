/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};


export type Gallery = {
  __typename?: 'Gallery';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
  place?: Maybe<Place>;
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  place?: Maybe<Place>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  heading: Scalars['String'];
  body?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
};

export type Place = {
  __typename?: 'Place';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  slug: Scalars['String'];
  name: Scalars['String'];
  visited: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Location>;
  gallery?: Maybe<Array<Maybe<Gallery>>>;
};

export type Query = {
  __typename?: 'Query';
  page?: Maybe<Array<Page>>;
  place?: Maybe<Array<Maybe<Place>>>;
};


export type QueryPageArgs = {
  first?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryPlaceArgs = {
  first?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
};

export type GetPagesQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
}>;


export type GetPagesQuery = { __typename?: 'Query', page?: Maybe<Array<{ __typename?: 'Page', id: number, heading: string, slug: string, body?: Maybe<string> }>> };

export type GetPagesBySlugQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetPagesBySlugQuery = { __typename?: 'Query', page?: Maybe<Array<{ __typename?: 'Page', id: number, heading: string, slug: string, body?: Maybe<string> }>> };

export type GetPlacesQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
}>;


export type GetPlacesQuery = { __typename?: 'Query', place?: Maybe<Array<Maybe<{ __typename?: 'Place', id: number, slug: string, name: string, visited: boolean, description?: Maybe<string>, location?: Maybe<{ __typename?: 'Location', latitude: number, longitude: number }>, gallery?: Maybe<Array<Maybe<{ __typename?: 'Gallery', id: number, url: string }>>> }>>> };

export type GetPlacesBySlugQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetPlacesBySlugQuery = { __typename?: 'Query', place?: Maybe<Array<Maybe<{ __typename?: 'Place', id: number, slug: string, name: string, visited: boolean, description?: Maybe<string>, location?: Maybe<{ __typename?: 'Location', latitude: number, longitude: number }>, gallery?: Maybe<Array<Maybe<{ __typename?: 'Gallery', id: number, url: string }>>> }>>> };
