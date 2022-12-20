import React from 'react';
import sideImg from '../../assets/pricing/development-bg.png';
import greenCheckmark from '../../assets/pricing/checkmark-green.png';
import blueX from '../../assets/pricing/x-blue.png';
import { developmentFeatures, developmentFeaturesList } from '../../constants/pricing';
import {
  DevelopTitle,
  DevelopSubTitle,
  DevelopHeading,
  DevelopCenter,
  DevelopSideImg,
  DevelopItemWrapperApp,
  DevelopContainer,
  DevelopTypeHeading,
  DevelopTitleHeading,
  DevelopFeatureHeading,
  DevelopFeature,
} from './development.styles';
import ButtonField from '../button-field';
import { targetPage } from '../../utils/index';

const Development = () => {

  const featureList = developmentFeaturesList.map((feature) => {
    return (
      <DevelopFeature key={feature}>
        {feature}
      </DevelopFeature>
    );
  });

  const featureChecklist = developmentFeatures.map((type) => {
    const { name, title, uiDesigns, uxDesigns, adminDashoard, analyticsDashboard, seoOptimization, iosStoreOptimization, onPageOptimization, chatBox, clothingDropshipping, satisfactionGuarantee } = type;
    return (
      <DevelopItemWrapperApp key={name}>
        <DevelopTypeHeading> {name} </DevelopTypeHeading>
        <DevelopFeatureHeading> {title} </DevelopFeatureHeading>
        <DevelopFeature>
          <img src={uiDesigns ? greenCheckmark : blueX}/>
        </DevelopFeature>
        <DevelopFeature>
          <img src={uxDesigns ? greenCheckmark : blueX}/>
        </DevelopFeature>
        <DevelopFeature>
          <img src={adminDashoard ? greenCheckmark : blueX}/>
        </DevelopFeature>
        <DevelopFeature>
          <img src={analyticsDashboard ? greenCheckmark : blueX}/>
        </DevelopFeature>
        <DevelopFeature>
          <img src={seoOptimization ? greenCheckmark : blueX}/>
        </DevelopFeature>
        <DevelopFeature>
          <img src={iosStoreOptimization ? greenCheckmark : blueX}/>
        </DevelopFeature>
        <DevelopFeature>
          <img src={onPageOptimization ? greenCheckmark : blueX}/>
        </DevelopFeature>
        <DevelopFeature>
          <img src={chatBox ? greenCheckmark : blueX}/>
        </DevelopFeature>
        <DevelopFeature>
          <img src={clothingDropshipping ? greenCheckmark : blueX}/>
        </DevelopFeature>
        <DevelopFeature>
          <img src={satisfactionGuarantee ? greenCheckmark : blueX}/>
        </DevelopFeature>
        <DevelopCenter> 
          <ButtonField color="yellow" onClick={() => targetPage('forbusiness#contact')}>
            Contact Sales
          </ButtonField>
        </DevelopCenter>
      </DevelopItemWrapperApp>
    );
  });

  return (
    <div id="Development">
      <DevelopHeading>
        <div>
          <DevelopTitle>
                        Get the right plan for your business
          </DevelopTitle>
          <DevelopSubTitle>Development Solutions</DevelopSubTitle>
        </div>
      </DevelopHeading>

      <DevelopContainer>
        <DevelopSideImg>
          <img src={sideImg} alt="Workspace Image"/>
        </DevelopSideImg>
        <div> 
          <DevelopTitleHeading> Solutions </DevelopTitleHeading> 
          {featureList} 
        </div>
        <DevelopCenter> {featureChecklist} </DevelopCenter>
      </DevelopContainer>
    </div>
  );

};

export default Development;
