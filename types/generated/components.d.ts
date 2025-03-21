import type { Attribute, Schema } from '@strapi/strapi';

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    description: '';
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 125;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 125;
      }>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Attribute.String & Attribute.DefaultTo<'currentURL'>;
    keywords: Attribute.Text;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Attribute.String & Attribute.DefaultTo<'index, follow'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 125;
      }>;
    metaViewport: Attribute.String &
      Attribute.DefaultTo<'width=device-width, initial-scale=1.0'>;
    structuredData: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
