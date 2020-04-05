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
                    <TableCell>Masks</TableCell>
                    <TableCell>
                      <a href="https://standards.cen.eu/dyn/www/f?p=204:110:0::::FSP_PROJECT:32928&cs=1B0AB06FEB70E43960D46D1198C37CC09">
                        EN 149:2009 Respiratory protective devices – Filtering half masks to protect against particles -
                        Requirements, testing, marking (commonly referred to as ‘FFP masks’ 5
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Masks</TableCell>
                    <TableCell>
                      <a href="https://standards.cen.eu/dyn/www/f?p=204:110:0::::FSP_PROJECT:69675&cs=1956C06A1BAF887FF462DD56057D34F29">
                        EN 14683:2019 EN Medical face masks - Requirements and test method 2
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Eye protection</TableCell>
                    <TableCell>
                      <a href="https://standards.cen.eu/dyn/www/f?p=204:110:0::::FSP_PROJECT,FSP_ORG_ID:2080,6068&cs=17AA55E632AC1CD384E0EC575FCAD517C">
                        EN 166:2001 Personal eye-protection – Specifications
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Protective clothing</TableCell>
                    <TableCell>
                      <a href="https://standards.cen.eu/dyn/www/f?p=204:110:0::::FSP_PROJECT,FSP_ORG_ID:6634,6143&cs=1762F21421CCAB5CDFA53171933C67440">
                        EN 14126:2003 Protective clothing - Performance requirements and tests methods for protective
                        clothing against infective agents
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Protective clothing</TableCell>
                    <TableCell>
                      <a href="https://standards.cen.eu/dyn/www/f?p=204:110:0::::FSP_PROJECT,FSP_ORG_ID:32983,6143&cs=1868F123B185CBECCA30C484231EB9233">
                        EN 14605:2009 Protective clothing against liquid chemicals - performance requirements for
                        clothing with liquid-tight (Type 3) or spray-tight (Type 4) connections, including items
                        providing protection to parts of the body only 2
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Protective clothing</TableCell>
                    <TableCell>
                      <a href="https://standards.cen.eu/dyn/www/f?p=204:110:0::::FSP_PROJECT,FSP_ORG_ID:32983,6143&cs=1868F123B185CBECCA30C484231EB9233">
                        EN 13795-1:2019 Surgical clothing and drapes - Requirements and test methods - Part 1: Surgical
                        drapes and gowns
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Protective clothing</TableCell>
                    <TableCell>
                      <a href="https://standards.cen.eu/dyn/www/f?p=204:110:0::::FSP_PROJECT,FSP_ORG_ID:37932,6186&cs=1B81482196B6350C2216C75AD9ADE1125">
                        EN 13795-2:2019 Surgical drapes, gowns and clean air suits, used as medical devices for
                        patients, clinical staff and equipment - Part 2: Test methods
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gloves</TableCell>
                    <TableCell>
                      <a href="https://standards.cen.eu/dyn/www/f?p=204:110:0::::FSP_PROJECT,FSP_ORG_ID:9434,6186&cs=1055F7903C46D8F71F0E79395BE7740D8">
                        EN 455-1:2000 Medical gloves for single use - Part 1: Requirements and testing for freedom from
                        holes (MDD)
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gloves</TableCell>
                    <TableCell>
                      <a href="https://standards.cen.eu/dyn/www/f?p=204:110:0::::FSP_PROJECT,FSP_ORG_ID:35266,6186&cs=12E9FE3435C94205908EA5CCA48D43953">
                        EN 455-2:2015 Medical gloves for single use - Part 2: Requirements and testing for physical
                        properties (MMD)
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gloves</TableCell>
                    <TableCell>
                      <a href="https://standards.cen.eu/dyn/www/f?p=204:110:0::::FSP_PROJECT,FSP_ORG_ID:37147,6186&cs=1E4761E51ADEE40870128D1F51B28EC61">
                        EN 455-3:2015 Medical gloves for single use - Part 3: Requirements and testing for biological
                        evaluation (MDD)
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gloves</TableCell>
                    <TableCell>
                      <a href="https://standards.cen.eu/dyn/www/f?p=204:110:0::::FSP_PROJECT,FSP_ORG_ID:26420,6186&cs=1BA98FB4EB88B7DB06C5D281EB3BABC64">
                        EN 455-4:2009 EN Medical gloves for single use - Part 4: Requirements and testing for shelf life
                        determination (MDD)
                      </a>
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
        <ExpansionPanelDetails>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell>Style</TableCell>
                  <TableCell>Design link</TableCell>
                  <TableCell>Review date</TableCell>
                  <TableCell>Reviewed by</TableCell>
                  <TableCell>Notes</TableCell>
                  <TableCell>List of materials</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Protective clothing</TableCell>
                  <TableCell>Manila Protective Gear’s Isolation Suit</TableCell>
                  <TableCell>
                    <a href="https://drive.google.com/open?id=1-Xr-67gs2qw0o44-hy-INb89I9m-wcLD">link</a>
                  </TableCell>
                  <TableCell>3/25/2020</TableCell>
                  <TableCell>OSCMS Medical Review Team</TableCell>
                  <TableCell>
                    <a href="https://www.dupont.com/packaging-materials-and-solutions/seaming-and-sealing.html">
                      This design produces a working isolation suit if seams are sealed. The recommended material is
                      Tyvek 1433R. Sewing seams make the garment more permeable because of needle holes; an only-sewn
                      suit should not be used to treat active patients. Please read through the techpack for full
                      construction details based on what kind of machine you have accessible. Dupont has a guide for
                      seaming & sealing Tyvek to itself in order to make sealed seams. Heat sealing the outer edge at
                      120-130°C before sewing would result in more-sealed, more-robust seams.
                    </a>
                  </TableCell>
                  <TableCell>TBD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Protective clothing</TableCell>
                  <TableCell>Gown and Tyvek Suit Modification/Retrofit</TableCell>
                  <TableCell>
                    <a href="https://drive.google.com/drive/folders/1oucDrWkrzXV3u6frnn6d9WZqNB437EFF">link</a>
                  </TableCell>
                  <TableCell>4/2/2020</TableCell>
                  <TableCell>OSCMS Medical Review Team</TableCell>
                  <TableCell>
                    These designs are meant for disposable isolation gowns. There are PDF and DXF files for two gowns, a
                    suit, and turning a Tyvek suit into a gown. There are also jig cutting instructions.
                  </TableCell>
                  <TableCell>TBD</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Protective clothing</TableCell>
                  <TableCell>Peekaboo Pattern: Isolation Gown</TableCell>
                  <TableCell>
                    <a href="https://www.peekaboopatternshop.com/isolation-gown/">link</a>
                  </TableCell>
                  <TableCell>4/2/2020</TableCell>
                  <TableCell>OSCMS Medical Review Team</TableCell>
                  <TableCell>
                    Due to the level of sewing and addition of wrist cuffs, this pattern is not meant for single-use
                    disposable isolation gowns. With cotton-weight fabric, it could be used for a patient hospital gown.
                    With ripstop nylon washable fabric, it could make a reusable isolation gown for staff (see customer
                    notes in the first link).
                  </TableCell>
                  <TableCell>TBD</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Protective clothing</TableCell>
                  <TableCell>One Piece Isolation Gown</TableCell>
                  <TableCell>
                    <a href="https://drive.google.com/file/d/1OmGaoocZSNhIHkhRkMgjV1nFxPR1SWm8/view?fbclid=IwAR3_31Aq__cipmnTaCwhRS9C_pNjxyftSDQyepUQ_RlHEffmvZbxjgypW-w">
                      link
                    </a>
                  </TableCell>
                  <TableCell>4/2/2020</TableCell>
                  <TableCell>OSCMS Medical Review Team</TableCell>
                  <TableCell>
                    "Rolls of fabric are typically 60 in wide so the pattern fits sideways along the length of the roll.
                    If you alternate the orientation of the full pattern by 180 degrees each time, you can minimize the
                    waste. If you fold the fabric (or plastic) in half before cutting, the half pattern is easiest. I
                    have only worn this gown when made out of thin plastic, so it's possible the head opening will be
                    too small if you are using melt blown material or a durable water repellant fabric that has no
                    stretch to it. The dashed lines above the head opening represent perforations that make a disposable
                    version tear-away. I was able to seal. the sleeve seams of this gown (a finely textured plastic like
                    a cheap party tablecloth) by using a very low setting on my hair straightening iron."
                  </TableCell>
                  <TableCell>TBD</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
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
    </PageWrapper>
  );
};

export default InfoPage;
