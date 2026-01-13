export interface ProductImage {
    src: string;
    title?: string;
    isThird?: boolean;
}

export interface ProductTab {
    id: string;
    label: string;
    content: {
        intro: string;
        features?: string[];
        images: ProductImage[];
        specsTitle?: string;
        specsHtml?: string; // Kept as HTML string for complex tables
        dimImages?: ProductImage[];
    };
}

export interface ProductModel {
    name?: string; // For three-rows
    modelName?: string; // For multi-model
    image: string;
    specs?: Record<string, string>;
}

export interface ProductBase {
    name: string;
    tag: string;
    icon: string;
    desc: string;
    layout?: 'tabbed' | 'three-rows' | 'epc-custom' | 'industrial-split' | 'centered' | 'prop-custom' | 'default';
    // Common fields
    intro?: string;
    details?: string;
    features?: string[];
    specs?: Record<string, string>;
    specsTitle?: string;
    image?: string;
    imageLabel?: string;
}

export interface TabbedProduct extends ProductBase {
    layout: 'tabbed';
    tabs: ProductTab[];
}

export interface ThreeRowsProduct extends ProductBase {
    layout: 'three-rows';
    models: ProductModel[];
}

export interface EpcCustomProduct extends ProductBase {
    layout: 'epc-custom';
    middleRow: { image: string; label: string }[];
    bottomRow: { image: string; label: string }[];
}

export interface IndustrialSplitProduct extends ProductBase {
    layout: 'industrial-split';
    dimensionImage: { src: string; title: string };
    usageImages: string[];
}

export interface CenteredProduct extends ProductBase {
    layout: 'centered';
    customBottomHtml?: string;
}

export interface PropCustomProduct extends ProductBase {
    layout: 'prop-custom';
    bottomContent: {
        header: string;
        subHeader: string;
        columns: { title: string; desc: string }[];
        bottomImage: string;
    };
}

export interface MultiModelProduct extends ProductBase {
    isMultiModel: boolean;
    models: ProductModel[];
}

// Union type
export type ProductData = 
    | TabbedProduct 
    | ThreeRowsProduct 
    | EpcCustomProduct 
    | IndustrialSplitProduct 
    | CenteredProduct 
    | PropCustomProduct 
    | MultiModelProduct
    | ProductBase; // Default fallback