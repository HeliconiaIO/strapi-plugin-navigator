import React from "react";
import { useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
import { Button } from "@strapi/design-system/Button";
import { Grid, GridItem } from '@strapi/design-system/Grid';
import { Box } from '@strapi/design-system/Box';
import ArrowLeft from "@strapi/icons/ArrowLeft";
import ArrowRight from "@strapi/icons/ArrowRight";
import { useCMEditViewDataManager} from "@strapi/helper-plugin";
import usePluginsQueryParams from "@strapi/admin/admin/src/content-manager/hooks/usePluginsQueryParams";

import navigatorRequests from "../../api/navigator";

const NavigationButtons = () => {
  const { modifiedData, layout, isSingleType } = useCMEditViewDataManager();

  const {
    push,
    location: { pathname },
  } = useHistory();

  const { formatMessage } = useIntl();
  const pluginsQueryParams = usePluginsQueryParams();


  const replaceLastIdInUrl = (url, newId) => {
    const regex = /\/(\d+)\/?$/;
    const newUrl = url.replace(regex, `/${newId}`);
    return newUrl;
  };

  const handleNextClick = async () => {
    try{
      const entry = await navigatorRequests.getNextRecord(layout.uid, modifiedData.id);
      
      const pathNext = replaceLastIdInUrl(pathname, entry?.[0]?.id);
      push({
        pathname: pathNext,
        state: { from: pathname },
        search: pluginsQueryParams,
      });
    }
    catch(error){
      console.log(error);
    }
  };

  const handlePreviusClick = async () => {
    try{
      const entry = await navigatorRequests.getPreviousRecord(layout.uid, modifiedData.id);
      
      const pathPrevious = replaceLastIdInUrl(pathname, entry?.[0]?.id);
      push({
        pathname: pathPrevious,
        state: { from: pathname },
        search: pluginsQueryParams,
      });
    }
    catch(error){
      console.log(error);
    }

  }

  const contentNext = {
    id: "next-button.components.next.button",
    defaultMessage: "Next",
  };
  const contentPrevious = {
    id: "previous-button.components.previous.button",
    defaultMessage: "Previous",
  };

  if (isSingleType) return null;
  return (
    <>
      {modifiedData.id && (
        <Grid gap={2}>
          <GridItem col={6} s={12}>
          <Button fullWidth variant="secondary" startIcon={<ArrowLeft />} onClick={handlePreviusClick}>
            {formatMessage(contentPrevious)}
          </Button>
          </GridItem>
          <GridItem col={6} s={12}>
          <Button fullWidth variant="secondary" endIcon={<ArrowRight />} onClick={handleNextClick}>
          {formatMessage(contentNext)}
          </Button>
          </GridItem>
        </Grid>
      )}
    </>
  );
};

export default NavigationButtons;