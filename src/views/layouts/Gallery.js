import React, { useRef, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import Loader from './Loader';
import Text from '../components/Text';

import isEmpty from '../../utils/isEmpty';

const GalleryContainer = styled('div')({
    display: 'grid',
    gridGap: 10,
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))',
    gridAutoRows: 20,
    width: '100%'
});


const ImageItem = styled('div')({
    width: '100%'
});

const ImageContainer = styled('div')({
    width: '100%'
});

const Image = styled('img')({
    width: '100%'
});

const Gallery = ({ fetchImagesPending, data }) => {

    const gridRef = useRef(null);

    const resizeGridItem = useCallback(item => {
        if(!isEmpty(gridRef) && !isEmpty(gridRef.current)){
            const rowHeight = parseInt(window.getComputedStyle(gridRef.current).getPropertyValue('grid-auto-rows'));
            const rowGap = parseInt(window.getComputedStyle(gridRef.current).getPropertyValue('grid-row-gap'));
            const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
            item.style.gridRowEnd = "span "+ rowSpan;
        }
    }, []);
      
    const resizeAllGridItems = useCallback(() => {
        if(!isEmpty(gridRef) && !isEmpty(gridRef.current)){
            const allItems = gridRef.current.getElementsByClassName("item");
            for(let x = 0; x < allItems.length; x++){
                resizeGridItem(allItems[x]);
            }
        }
    }, [resizeGridItem])
    
    const resizeInstance = useCallback(instance => {
        const item = instance.elements[0];
        resizeGridItem(item);
    }, [resizeGridItem])
    
    useEffect(() => {
        if(!fetchImagesPending && !isEmpty(gridRef) && !isEmpty(gridRef.current)){
            resizeAllGridItems();
            const allItems = document.getElementsByClassName("item");
            for(let x = 0; x < allItems.length; x++){
                imagesLoaded( allItems[x], resizeInstance);
            }
        }
    }, [fetchImagesPending, resizeInstance, resizeAllGridItems, data]);
    
    useEffect(() => {
        window.addEventListener("resize", resizeAllGridItems);

        return () =>{
            window.removeEventListener("resize", resizeAllGridItems);
        }
    },[resizeAllGridItems])
    
    if(fetchImagesPending) return <Loader />;

    return (
        <GalleryContainer ref={gridRef}>
            {
                (
                    !isEmpty(data) ? data.map(item => (
                        <ImageItem className="item">
                            <ImageContainer className="content">
                                <Image src={item.links[0].href}/>
                            </ImageContainer>
                        </ImageItem>
                    )) : <Text fontSize={20} inverted>No Results found</Text>
                )
            }
        </GalleryContainer>
    );
}

export default connect(state => ({
    fetchImagesPending: state.home.fetchImagesPending
}))(Gallery);