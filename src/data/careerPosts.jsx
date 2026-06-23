import { Link } from 'react-router-dom'

const careerPosts = [
	{
		id: 1,
		title: 'Cybersecurity Networking and Main Plan',
		description: 'Talking with a cybersecurity professional and mapping out tasks.',
		content:
			<div>
				<h2>Networking</h2>
				<p>
					I networked with a Cybersecurity guy that I met on whatsapp. He gave me some tips about the different
					areas of focus in the field, from cyber security engineering to network segmentations, cloud infrastructure, etc 
					in a lot of detail. He brought up real world applications and what things different cyber security specializists
					are thinking about as they do their work. I got a good grasp of the different routes I can take in this field.
				</p>
				<p>
					He also brought up resume tips, as well as what I can do now, since I am in computer engineering. My pathway is to get 
					the <Link to="https://www.comptia.org/en-us/certifications/security">CompTIA Security+</Link> certificate which will give
					me a good intro into the knowledge needed as a cyber security professional. I would then look to keep gaining foundational 
					knowledge through different resources and look at specialized knowledge as well (many different areas in cybersecurity). 
					After that, the next thing is to build a network and talk to people.  
				</p>
				<p>
					He actually got into cybersecurity incidentally, he was a CS major and specialized in data, and the cyber security job he got 
					was about data and getting metrics to find risk exposure. I took notes about all of this in a google doc.
				</p>
				<h2>Plans</h2>
				<p>
					With this in mind, I will be focusing on these things:
					<ol>
						<li>Getting the certificate</li>
						<li>Trying to build a software project to put on my resume</li>
						
					</ol>
					These are things that would also be nice to do:
					<ol>
						<li>Adding the clock school project on my resume from freshman year</li>
						<li>Building a personal computer engineering project with Arduino</li>
					</ol>
				</p>
			</div>
		,
		date: 'June 3, 2026',
	},
	{
		id: 2,
		title: 'Cyber and other progress',
		description: 'General Progress',
		content:
			<div>
				<h2>Networking</h2>
				<p>
					I talked with Shahin some time back, here are some tips he gave me:
					<ol>
						<li>Getting the CISSP certificate, as it is a cert for people with 5 year exp and getting that cert can show that I'm realy qualified. Can become Security Analyst with it.</li>
						<li>Considering biomedical engineering and quantum computing and cybersecurity (good fields during AI rise)</li>
						<li>Working on a home lab for cybersecurity and making posts to use it as experience on resume. The idea of posting stuff you work on in general.</li>
						<li>Taking machine learning courses in school.</li>
					</ol>
				</p>
				<h2>Cyber</h2>
				<p>
					Finished module 2 and 3 between today and yesterday of the <Link to="https://www.coursera.org/professional-certificates/google-cybersecurity">
					Google Cybersecurity Certificate</Link>. Planning to do a module a day to finish it within a month.
				</p>
			</div>
		,
		date: 'June 12, 2026',
	},
	{
		id: 3,
		title: 'Cyber and other progress',
		description: 'General Progress',
		content:
			<div>
				<h2>Cyber</h2>
				<p>
					Finished module 4 of course 2, so I have 7 more courses left. Planning to actually pay for the course soon since my trial will expire.
				</p>
				
			</div>
		,
		date: 'June 14, 2026',
	},
	{
		id: 4,
		title: 'Cyber',
		description: 'General Progress',
		content:
			<div>
				<h2>Cyber</h2>
				<p>
					Finished module 1 of course 3. Course 3 is about securing networks.
				</p>
				
			</div>
		,
		date: 'June 19, 2026',
	},
	{
		id: 5,
		title: 'Cyber',
		description: 'General Progress',
		content:
			<div>
				<h2>Cyber</h2>
				<p>
					Finished module 2 of course 3. Started to take notes now as I do the course because I want to be able to recall the information better.
					The course is helpful for the CompTIA Security+ exam and the knowledge inside is more important than the actual certificate from Google.
					A catch to this is that it now takes at least an hour to finish each module I believe. 
				</p>
				<p>
					This module dealt with firewalls, VPNs, subnets, proxy servers, and network protocols.
				</p>
				
			</div>
		,
		date: 'June 21, 2026',
	},
	{
		id: 6,
		title: 'Cyber',
		description: 'General Progress',
		content:
			<div>
				<h2>Cyber</h2>
				<p>
					Finished module 3 of course 3. I technically finished on the morning of June 23. 
				</p>
				<p>
					This module dealt with network security, intrusion tactics, and attack protection.
				</p>
				
			</div>
		,
		date: 'June 22, 2026',
	},
	
	
	
]

export default careerPosts