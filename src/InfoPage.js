import React from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { PageWrapper } from './styles';
import styled from 'styled-components';

const Heading = styled.h2`
  color: #48818d;
`;
const P = styled.p`
  color: #48818d;
`;

const InfoPage = () => {
  return (
    <PageWrapper>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <P>Which products are needed?</P>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <Heading>Can be manufactured at home</Heading>
            <P>&bull; Mouthguard with visor</P>
            <P>&bull; Different types of respiratory protection</P>
            <P>&bull; More...</P>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <P>Which material can be used?</P>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails></ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <P>ISO Standards</P>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <Heading>Standards and certifications</Heading>
            <Heading>CE marking</Heading>
            <P>
              CE marking is a certification mark that indicates conformity with health, safety, and environmental
              protection standards for products sold within the European Economic Area (EEA). Read more.
            </P>
            <Heading>Links to ISO Standards</Heading>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Category</TableCell>
                    <TableCell>Link_ISO</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Gloves</TableCell>
                    <TableCell>
                      SS-EN 455-1 Engångshandskar för sjukvård - Del 1: Krav samt provning av hålförekomst
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gloves</TableCell>
                    <TableCell>
                      SS-EN 455-1 Engångshandskar för sjukvård - Del 1: Krav samt provning av hålförekomst
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gloves</TableCell>
                    <TableCell>
                      SS-EN 455-2:2015 Engångshandskar för sjukvård - Del 2: Krav på och provning av fysikaliska
                      egenskaper
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gloves</TableCell>
                    <TableCell>
                      SS-EN 455-3:2015 Medicinska engångshandskar - Del 3: Krav och provningsmetoder för biologisk
                      utvärdering
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gloves</TableCell>
                    <TableCell>
                      SS-EN 455-4:2009 Medicinska engångshandskar - Del 4: Krav och provningsmetoder för
                      lagringsegenskaper
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Eye protection</TableCell>
                    <TableCell>SS-EN 166 Ögonskydd - Fordringar och specifikationer</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Protective clothing</TableCell>
                    <TableCell>
                      SS-EN 14126:2004 Skyddskläder - Funktionskrav och provningsmetoder för skyddskläder mot smittsamma
                      ämnen
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Masks</TableCell>
                    <TableCell>
                      SS-EN 149+A1:2009 Andningsskydd - Filtrerande halvmasker mot partiklar - Fordringar, provning,
                      märkning
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Protective clothing</TableCell>
                    <TableCell>
                      SS-EN 14605:2005+A1:2009 Skyddskläder mot kemikalier i vätskeform - Prestandakrav för skyddskläder
                      mot kemikalier, med vätsketäta (Typ 3) eller stänktäta (Typ 4) anslutningar mellan olika delar av
                      beklädnanden samt beklädnad begränsad till delar av kroppen (Typ PB [3] och PB [4])
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <P>Due to the COVID-19 crisis these standards are now free of charge if you register.</P>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <P>Instructions & blueprints</P>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails></ExpansionPanelDetails>
      </ExpansionPanel>
    </PageWrapper>
  );
};

export default InfoPage;
