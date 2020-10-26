/** *******************************************************************************************************************
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
  
  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
      http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.                                                                              *
 ******************************************************************************************************************** */
import React from 'react';
import GetStarted from '.';
import Stack from '../Stack';
import ColumnLayout, { Column } from '../ColumnLayout';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Container from '../Container';
import Button from '../../components/Button';

export default {
    component: GetStarted,
    title: 'GetStarted',
};

export const Default = () => {
    const action = (
        <Container>
            <Stack>
                <Heading variant="h2">Start the action now</Heading>
                <Text variant="p">Get started by doing step 1, doing step 2, and doing step 3.</Text>
                <Button variant="primary">Get started</Button>
            </Stack>
        </Container>
    );
    const sidebar = (
        <Container title="Pricing">
            <Text variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum
            </Text>
        </Container>
    );

    return (
        <GetStarted
            category="App Category"
            title="App Title"
            subTitle="App subTitle"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua."
            action={action}
            sidebar={sidebar}
        >
            <Stack spacing="l">
                <Stack spacing="s">
                    <Heading variant="h2">Benefits</Heading>
                    <Container>
                        <Stack>
                            <ColumnLayout collapseBelow="sm">
                                <Column>
                                    <Stack>
                                        <Heading variant="h3">
                                            <strong>Benefit 1</strong>
                                        </Heading>
                                        <Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                        </Text>
                                    </Stack>
                                </Column>
                                <Column>
                                    <Stack>
                                        <Heading variant="h3">
                                            <strong>Benefit 2</strong>
                                        </Heading>
                                        <Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                        </Text>
                                    </Stack>
                                </Column>
                            </ColumnLayout>
                            <ColumnLayout collapseBelow="sm">
                                <Column>
                                    <Stack>
                                        <Heading variant="h3">
                                            <strong>Benefit 3</strong>
                                        </Heading>
                                        <Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                        </Text>
                                    </Stack>
                                </Column>
                                <Column>
                                    <Stack>
                                        <Heading variant="h3">
                                            <strong>Benefit 4</strong>
                                        </Heading>
                                        <Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                        </Text>
                                    </Stack>
                                </Column>
                            </ColumnLayout>
                        </Stack>
                    </Container>
                </Stack>
                <Stack spacing="s">
                    <Heading variant="h2">Use cases</Heading>
                    <Container>
                        <Stack>
                            <ColumnLayout collapseBelow="sm">
                                <Column>
                                    <Stack>
                                        <Heading variant="h3">Use case 1</Heading>
                                        <Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                        </Text>
                                    </Stack>
                                </Column>
                                <Column>
                                    <Stack>
                                        <Heading variant="h3">Use case 2</Heading>
                                        <Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                        </Text>
                                    </Stack>
                                </Column>
                            </ColumnLayout>
                            <ColumnLayout collapseBelow="sm">
                                <Column>
                                    <Stack>
                                        <Heading variant="h3">Use case 3</Heading>
                                        <Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                        </Text>
                                    </Stack>
                                </Column>
                                <Column>
                                    <Stack>
                                        <Heading variant="h3">Use case 4</Heading>
                                        <Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                        </Text>
                                    </Stack>
                                </Column>
                            </ColumnLayout>
                        </Stack>
                    </Container>
                </Stack>
            </Stack>
        </GetStarted>
    );
};