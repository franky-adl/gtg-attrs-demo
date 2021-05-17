import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import './editor.scss'; 

registerBlockType( 'myfirstblock/gtg-attrs-demo', {
  apiVersion: 2,
  title: 'GTG Demo Block (Attributes)',
  icon: 'columns', // https://developer.wordpress.org/resource/dashicons/#columns
  category: 'media',
  attributes: {
    img: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    description: {
      type: 'string',
      default: 'sample text'
    }
  },
  edit: props => {
    const blockProps = useBlockProps( {
      className: 'gtg-attrs-demo'
    } );

    const { 
      attributes,
      setAttributes
    } = props;

    const {
      img,
      title,
      description
    } = attributes;
    
    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title="Block Settings">
            <TextControl
              label="Image Source Url"
              value={img ? img : ''}
              onChange={(newVal) => setAttributes({ img: newVal })}
            />
            <TextControl
              label="Title Text"
              value={title ? title : ''}
              onChange={(newVal) => setAttributes({ title: newVal })}
            />
            <TextControl
              label="Description Text"
              value={description ? description : ''}
              onChange={(newVal) => setAttributes({ description: newVal })}
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <div className="img-column">
            <img className="side-img" src={img} />
          </div>
          <div className="text-column">
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
          </div>
        </div>
      </Fragment>
    );
  },
  save: props => {
    const blockProps = useBlockProps.save( {
      className: 'gtg-attrs-demo'
    } );

    const { 
      attributes,
    } = props;

    const {
      img,
      title,
      description
    } = attributes;

    return (
      <div {...blockProps}>
        <div className="img-column">
          <img className="side-img" src={img} />
        </div>
        <div className="text-column">
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    );
  },
} );