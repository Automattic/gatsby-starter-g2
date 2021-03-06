import React from "react"
import { Link } from "gatsby"
import { Tabs, Tab, TabList, TabPanel, Button, Alert, Alerts, Icon, Heading, Grid, Text, HStack, VStack, Card, CardBody, Placeholder, View, Spacer } from '@wp-g2/components'
import { ui } from "@wp-g2/styles"
import { FiStar } from '@wp-g2/icons'
import { Layout } from "../core"
import { PluginCard } from "../components"
import { useLocalState } from 'use-enhanced-state'

function InfoCard( { title, content } ) {
	return (
		<Card>
			<CardBody css={ "height: 100%; padding: 20px" }>
				<VStack spacing={ 5 }>
					<Heading size={ 3 }>{ title }</Heading>
					<Placeholder height={ 200 } />
					<View>{ content }</View>
					<Spacer />
				</VStack>
			</CardBody>
		</Card>
	);
}

function Page() {

	const [ pluginConfig, setPluginConfig ] = useLocalState( 'plugins', { pluginConfig } );

	const upgradeAccount = () => {
		setPluginConfig( { upgraded: true } );
	};

	const activatePlugin = () => {
		! pluginConfig.activated ? setPluginConfig( { activated: true, upgraded: true } ) : setPluginConfig( { activated: false, upgraded: true } );
	};

	return (
		<Layout>
			<View css={ "max-width: 900px; margin: 36px auto !important;" }>
				<Spacer my={ 5 }>
					<HStack spacing={ 5 } alignment="center">
						{ pluginConfig.upgraded && pluginConfig.activated &&
							<Spacer>
								<Alerts>
									<Alert status="success">
										<Text>This plugin has been added to your site</Text>
									</Alert>
								</Alerts>
							</Spacer>
						}
					</HStack>
				</Spacer>
				<Spacer my={ 5 }>
					<Card>
						<CardBody css={ "padding: 0" }>
							<Placeholder width={ "100%" } height={ "300px" } />
							<HStack css={ "padding: 16px" } spacing={ 4 }>
								<Placeholder width={ "50px" } height={ "50px" } css={ "border-radius: 50%" } />
								<Spacer>
									<VStack>
										<Heading size={ 2 }>Plugin name</Heading>
										<Text>by <Link to="/">Plugin author</Link></Text>
									</VStack>
								</Spacer>
								{ ! pluginConfig.upgraded &&
									<Button onClick={ () => upgradeAccount() }>Upgrade to add plugin</Button>
								}
								{ pluginConfig.upgraded &&
									<Button onClick={ () => activatePlugin() }>
										{ ! pluginConfig.activated ? "Add plugin" : "Remove plugin" }
									</Button>
								}
							</HStack>
						</CardBody>
					</Card>
				</Spacer>
				<Spacer my={ 5 }>
					<Card>
						<CardBody css={ "padding: 0" }>
							<HStack css={ "padding: 0 24px" }>
								<VStack>
									<Text>Rating</Text>
									<Text size={ 24 } weight={ "600" }>4.8</Text>
								</VStack>
								<View css={ "background: #ddd; width: 1px; height: 80px" } />
								<VStack>
									<Text>Active installs</Text>
									<Text size={ 24 } weight={ "600" }>2+ million</Text>
								</VStack>
								<View css={ "background: #ddd; width: 1px; height: 80px" } />
								<VStack>
									<Text>Version</Text>
									<Text size={ 24 } weight={ "600" }>8.0.1</Text>
								</VStack>
								<View css={ "background: #ddd; width: 1px; height: 80px" } />
								<VStack>
									<Text>Last updated</Text>
									<Text size={ 24 } weight={ "600" }>3 weeks ago</Text>
								</VStack>
								<View css={ "background: #ddd; width: 1px; height: 80px" } />
								<VStack>
									<Text>Requires version</Text>
									<Text size={ 24 } weight={ "600" }>5.5+</Text>
								</VStack>
								<View css={ "background: #ddd; width: 1px; height: 80px" } />
								<VStack>
									<Text>Requires PHP</Text>
									<Text size={ 24 } weight={ "600" }>5.2.0</Text>
								</VStack>
							</HStack>
						</CardBody>
					</Card>
				</Spacer>
				<Tabs selectedId={ pluginConfig.activated ? "support" : "description" }>
					<TabList css={ "width: 33%" }>
						<Tab id="description">Description</Tab>
						<Tab>Reviews</Tab>
						<Tab id="support">Support</Tab>
					</TabList>
					<TabPanel><InfoCard title="Description" content={ <Text>Description of the plugin.</Text> }/></TabPanel>
					<TabPanel><InfoCard title="Reviews" content={ <HStack justify={ "start" } gap={ 1 }><Icon icon={ <FiStar /> } /><Icon icon={ <FiStar /> } /><Icon icon={ <FiStar /> } /><Icon icon={ <FiStar /> } /><Icon icon={ <FiStar /> } /><Text>4.8/5</Text></HStack> } /></TabPanel>
					<TabPanel><InfoCard title="Support" content={ <View><HStack justify={ "start" }><Heading size={ 4 }>Forums:</Heading><Text>Contact</Text></HStack><HStack justify={ "start" }><Heading size={ 4 }>Website:</Heading><Link to={ "http://wordpress.org" }>WordPress.org</Link></HStack></View> } /></TabPanel>
				</Tabs>
				<Spacer mt={ 10 } mb={ 5 }>
					<Heading size={ 4 }>More like this</Heading>
				</Spacer>
				<Grid columns={ 3 } gap={ "20px" }>
					<PluginCard title={ "Plugin 1" } />
					<PluginCard title={ "Plugin 2" } />
					<PluginCard title={ "Plugin 3" } />
				</Grid>
			</View>
		</Layout>
	)
}

export default Page
