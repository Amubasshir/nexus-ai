import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Case`.
 */
export type CaseProps = SliceComponentProps<Content.CaseSlice>;

/**
 * Component for "Case" Slices.
 */
const Case = ({ slice }: CaseProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for case (variation: {slice.variation}) Slices
    </section>
  );
};

export default Case;
