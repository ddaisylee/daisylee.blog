import React, { ReactNode } from 'react';
import { graphql } from 'gatsby';
import BaseTemplate from './BaseTemplate';

// type PostTemplateProps = {
//   children: ReactNode;
// };

const PostTemplate = () => {
  return <BaseTemplate>post template</BaseTemplate>;
};

export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
