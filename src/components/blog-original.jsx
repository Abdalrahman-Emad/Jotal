"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "./language-context"
import { X, Calendar, User, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Blog = () => {
  const { language } = useLanguage()
  const [selectedArticle, setSelectedArticle] = useState(null)

  const content = {
    en: {
      sectionTitle: "Expert Pest Control Insights",
      sectionSubtitle: "Professional guidance and proven solutions for Jeddah's unique pest challenges",
      by: "By",
      readTime: "Read time:",
      close: "Close",
      readMore: "Read Full Article",
      articles: [
        {
          id: 1,
          title: "Complete Guide to Ant Control in Jeddah's Coastal Climate",
          excerpt:
            "Discover professional strategies to eliminate ant infestations in Jeddah's unique coastal environment. Learn about local ant species and proven treatment methods.",
          image: "/article1.webp",
          author: "Eng. Youssef Alashry",
          date: "December 15, 2024",
          full: `
          <div class="space-y-8">
            <div class="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
              <h4 class="text-xl font-semibold text-emerald-800 mb-3">Why Jeddah Faces Unique Ant Challenges</h4>
              <p class="text-emerald-700 leading-relaxed">Jeddah's coastal location along the Red Sea creates ideal conditions for various ant species. The combination of high humidity, warm temperatures year-round, and sandy soil provides perfect breeding grounds for these persistent pests.</p>
            </div>

            <section>
              <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-emerald-200 pb-2">Common Ant Species in Jeddah</h3>
              
              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div class="bg-white p-5 rounded-lg shadow-md border border-slate-200">
                  <h4 class="text-lg font-semibold text-slate-800 mb-3">🐜 Pharaoh Ants</h4>
                  <ul class="text-slate-600 space-y-2">
                    <li>• Thrive in Jeddah's warm, humid climate</li>
                    <li>• Form multiple colonies quickly</li>
                    <li>• Attracted to sweet foods and moisture</li>
                    <li>• Difficult to eliminate without professional treatment</li>
                  </ul>
                </div>
                
                <div class="bg-white p-5 rounded-lg shadow-md border border-slate-200">
                  <h4 class="text-lg font-semibold text-slate-800 mb-3">🐜 Pavement Ants</h4>
                  <ul class="text-slate-600 space-y-2">
                    <li>• Common in Jeddah's urban areas</li>
                    <li>• Build nests under concrete slabs</li>
                    <li>• Active during cooler evening hours</li>
                    <li>• Leave visible sand piles near entry points</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-emerald-200 pb-2">Professional Treatment Methods</h3>
              
              <div class="space-y-6">
                <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl">
                  <h4 class="text-xl font-semibold text-blue-800 mb-4">🎯 Targeted Baiting Systems</h4>
                  <p class="text-blue-700 mb-4">Our specialized approach uses advanced gel baits specifically formulated for Jeddah's climate conditions.</p>
                  <div class="grid md:grid-cols-3 gap-4">
                    <div class="text-center">
                      <div class="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span class="text-blue-600 font-bold">1</span>
                      </div>
                      <p class="text-sm text-blue-700">Strategic placement near ant trails</p>
                    </div>
                    <div class="text-center">
                      <div class="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span class="text-blue-600 font-bold">2</span>
                      </div>
                      <p class="text-sm text-blue-700">Colony elimination within 7-14 days</p>
                    </div>
                    <div class="text-center">
                      <div class="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span class="text-blue-600 font-bold">3</span>
                      </div>
                      <p class="text-sm text-blue-700">Long-term prevention barrier</p>
                    </div>
                  </div>
                </div>

                <div class="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                  <h4 class="text-xl font-semibold text-amber-800 mb-4">🛡️ Perimeter Defense System</h4>
                  <p class="text-amber-700 mb-4">Create an invisible barrier around your Jeddah property to prevent future infestations.</p>
                  <ul class="text-amber-700 space-y-2">
                    <li>• Weather-resistant treatments for coastal conditions</li>
                    <li>• Safe for families and pets</li>
                    <li>• Quarterly maintenance program</li>
                    <li>• 100% satisfaction guarantee</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-emerald-200 pb-2">Prevention Tips for Jeddah Residents</h3>
              
              <div class="bg-slate-50 p-6 rounded-xl">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 class="text-lg font-semibold text-slate-800 mb-3">🏠 Indoor Prevention</h4>
                    <ul class="text-slate-600 space-y-2">
                      <li>• Seal cracks around windows and doors</li>
                      <li>• Store food in airtight containers</li>
                      <li>• Fix moisture problems immediately</li>
                      <li>• Clean up spills and crumbs promptly</li>
                      <li>• Use dehumidifiers in humid areas</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 class="text-lg font-semibold text-slate-800 mb-3">🌿 Outdoor Prevention</h4>
                    <ul class="text-slate-600 space-y-2">
                      <li>• Trim vegetation away from building</li>
                      <li>• Remove standing water sources</li>
                      <li>• Keep garbage bins tightly sealed</li>
                      <li>• Apply barrier treatments quarterly</li>
                      <li>• Inspect for new ant trails regularly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div class="bg-emerald-600 text-white p-6 rounded-xl text-center">
              <h4 class="text-xl font-bold mb-3">Need Professional Ant Control in Jeddah?</h4>
              <p class="mb-4">Our certified technicians understand Jeddah's unique pest challenges and provide guaranteed results.</p>
              <div class="flex justify-center space-x-4 text-sm">
                <span>✓ Same-day service available</span>
                <span>✓ Eco-friendly treatments</span>
                <span>✓ 1-year warranty</span>
              </div>
            </div>
          </div>
        `,
        },
        {
          id: 2,
          title: "Seasonal Pest Prevention: Protecting Your Jeddah Home Year-Round",
          excerpt:
            "Master the art of seasonal pest control in Jeddah. Learn when different pests are most active and how to prepare your home for each season.",
          image: "/article2.webp",
          author: "Eng. Youssef Alashry",
          date: "December 10, 2024",
          full: `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
              <h4 class="text-xl font-semibold text-purple-800 mb-3">Understanding Jeddah's Pest Seasons</h4>
              <p class="text-purple-700 leading-relaxed">Unlike temperate climates, Jeddah's year-round warmth means pest activity never truly stops. However, different seasons bring unique challenges that require specific prevention strategies.</p>
            </div>

            <section>
              <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-purple-200 pb-2">Seasonal Pest Activity Calendar</h3>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
                  <div class="flex items-center mb-4">
                    <div class="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span class="text-sm font-bold">☀️</span>
                    </div>
                    <h4 class="text-xl font-bold text-red-800">Summer (June - August)</h4>
                  </div>
                  <div class="space-y-3">
                    <div class="bg-white p-3 rounded-lg">
                      <h5 class="font-semibold text-red-700 mb-2">Peak Activity:</h5>
                      <ul class="text-red-600 text-sm space-y-1">
                        <li>• Cockroaches (seeking cool, moist areas)</li>
                        <li>• Flying insects (moths, flies)</li>
                        <li>• Ants (increased foraging activity)</li>
                      </ul>
                    </div>
                    <div class="bg-red-100 p-3 rounded-lg">
                      <h5 class="font-semibold text-red-800 mb-2">Key Actions:</h5>
                      <ul class="text-red-700 text-sm space-y-1">
                        <li>• Increase AC maintenance</li>
                        <li>• Seal entry points</li>
                        <li>• Monitor moisture levels</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                  <div class="flex items-center mb-4">
                    <div class="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span class="text-sm font-bold">🌊</span>
                    </div>
                    <h4 class="text-xl font-bold text-blue-800">Humid Season (Sept - Nov)</h4>
                  </div>
                  <div class="space-y-3">
                    <div class="bg-white p-3 rounded-lg">
                      <h5 class="font-semibold text-blue-700 mb-2">Peak Activity:</h5>
                      <ul class="text-blue-600 text-sm space-y-1">
                        <li>• Silverfish and book lice</li>
                        <li>• Termites (swarming season)</li>
                        <li>• Mosquitoes (breeding increase)</li>
                      </ul>
                    </div>
                    <div class="bg-blue-100 p-3 rounded-lg">
                      <h5 class="font-semibold text-blue-800 mb-2">Key Actions:</h5>
                      <ul class="text-blue-700 text-sm space-y-1">
                        <li>• Dehumidify storage areas</li>
                        <li>• Termite inspection</li>
                        <li>• Eliminate standing water</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <div class="flex items-center mb-4">
                    <div class="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span class="text-sm font-bold">🌿</span>
                    </div>
                    <h4 class="text-xl font-bold text-green-800">Mild Season (Dec - Feb)</h4>
                  </div>
                  <div class="space-y-3">
                    <div class="bg-white p-3 rounded-lg">
                      <h5 class="font-semibold text-green-700 mb-2">Peak Activity:</h5>
                      <ul class="text-green-600 text-sm space-y-1">
                        <li>• Rodents (seeking warmth)</li>
                        <li>• Spiders (indoor migration)</li>
                        <li>• Stored product pests</li>
                      </ul>
                    </div>
                    <div class="bg-green-100 p-3 rounded-lg">
                      <h5 class="font-semibold text-green-800 mb-2">Key Actions:</h5>
                      <ul class="text-green-700 text-sm space-y-1">
                        <li>• Seal cracks and gaps</li>
                        <li>• Inspect stored foods</li>
                        <li>• Set preventive barriers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200">
                  <div class="flex items-center mb-4">
                    <div class="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                      <span class="text-sm font-bold">🌸</span>
                    </div>
                    <h4 class="text-xl font-bold text-yellow-800">Spring Season (Mar - May)</h4>
                  </div>
                  <div class="space-y-3">
                    <div class="bg-white p-3 rounded-lg">
                      <h5 class="font-semibold text-yellow-700 mb-2">Peak Activity:</h5>
                      <ul class="text-yellow-600 text-sm space-y-1">
                        <li>• General pest emergence</li>
                        <li>• Increased breeding activity</li>
                        <li>• Garden and outdoor pests</li>
                      </ul>
                    </div>
                    <div class="bg-yellow-100 p-3 rounded-lg">
                      <h5 class="font-semibold text-yellow-800 mb-2">Key Actions:</h5>
                      <ul class="text-yellow-700 text-sm space-y-1">
                        <li>• Comprehensive inspection</li>
                        <li>• Refresh barrier treatments</li>
                        <li>• Landscape maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-purple-200 pb-2">Monthly Prevention Checklist</h3>
              
              <div class="bg-slate-50 p-6 rounded-xl">
                <div class="grid md:grid-cols-3 gap-6">
                  <div class="space-y-4">
                    <h4 class="text-lg font-semibold text-slate-800 border-b border-slate-300 pb-2">🗓️ Monthly Tasks</h4>
                    <ul class="space-y-2 text-slate-600">
                      <li class="flex items-start">
                        <span class="text-emerald-500 mr-2">✓</span>
                        <span>Inspect all entry points</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-emerald-500 mr-2">✓</span>
                        <span>Check moisture levels</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-emerald-500 mr-2">✓</span>
                        <span>Clean drains and gutters</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-emerald-500 mr-2">✓</span>
                        <span>Trim vegetation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div class="space-y-4">
                    <h4 class="text-lg font-semibold text-slate-800 border-b border-slate-300 pb-2">📅 Quarterly Tasks</h4>
                    <ul class="space-y-2 text-slate-600">
                      <li class="flex items-start">
                        <span class="text-blue-500 mr-2">✓</span>
                        <span>Professional inspection</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-blue-500 mr-2">✓</span>
                        <span>Barrier treatment refresh</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-blue-500 mr-2">✓</span>
                        <span>Deep clean storage areas</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-blue-500 mr-2">✓</span>
                        <span>HVAC system maintenance</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div class="space-y-4">
                    <h4 class="text-lg font-semibold text-slate-800 border-b border-slate-300 pb-2">📆 Annual Tasks</h4>
                    <ul class="space-y-2 text-slate-600">
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2">✓</span>
                        <span>Comprehensive termite inspection</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2">✓</span>
                        <span>Structural seal renewal</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2">✓</span>
                        <span>Pest control plan review</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-purple-500 mr-2">✓</span>
                        <span>Property vulnerability assessment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div class="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl text-center">
              <h4 class="text-xl font-bold mb-3">Stay Ahead of Jeddah's Pest Seasons</h4>
              <p class="mb-4">Our seasonal protection program adapts to Jeddah's unique climate patterns, ensuring year-round peace of mind.</p>
              <div class="flex justify-center space-x-4 text-sm">
                <span>✓ Customized seasonal treatments</span>
                <span>✓ Climate-specific solutions</span>
                <span>✓ Proactive prevention</span>
              </div>
            </div>
          </div>
        `,
        },
        {
          id: 3,
          title: "Termite Protection for Jeddah Properties: Complete Defense Guide",
          excerpt:
            "Safeguard your Jeddah property from termite damage with our comprehensive protection strategies. Learn about local termite species and advanced treatment options.",
          image: "/article3.webp",
          author: "Eng. Youssef Alashry",
          date: "December 5, 2024",
          full: `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-xl border-l-4 border-amber-500">
              <h4 class="text-xl font-semibold text-amber-800 mb-3">Why Termites Thrive in Jeddah</h4>
              <p class="text-amber-700 leading-relaxed">Jeddah's coastal climate, with its consistent warmth and humidity from the Red Sea, creates ideal conditions for termite colonies. The sandy soil composition allows for easy tunneling, while the abundance of cellulose materials in modern construction provides ample food sources.</p>
            </div>

            <section>
              <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-amber-200 pb-2">Termite Species Common in Jeddah</h3>
              
              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                  <div class="flex items-start space-x-4">
                    <div class="bg-red-100 p-3 rounded-full">
                      <span class="text-2xl">🐛</span>
                    </div>
                    <div class="flex-1">
                      <h4 class="text-xl font-bold text-red-800 mb-3">Subterranean Termites</h4>
                      <div class="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 class="font-semibold text-slate-700 mb-2">Characteristics:</h5>
                          <ul class="text-slate-600 space-y-1 text-sm">
                            <li>• Live in underground colonies</li>
                            <li>• Build mud tubes for protection</li>
                            <li>• Most destructive termite species</li>
                            <li>• Active year-round in Jeddah's climate</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-slate-700 mb-2">Damage Potential:</h5>
                          <ul class="text-red-600 space-y-1 text-sm">
                            <li>• Can destroy structural wood</li>
                            <li>• Damage often goes unnoticed</li>
                            <li>• Colonies can contain millions</li>
                            <li>• Cause billions in damage annually</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                  <div class="flex items-start space-x-4">
                    <div class="bg-orange-100 p-3 rounded-full">
                      <span class="text-2xl">🪲</span>
                    </div>
                    <div class="flex-1">
                      <h4 class="text-xl font-bold text-orange-800 mb-3">Drywood Termites</h4>
                      <div class="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 class="font-semibold text-slate-700 mb-2">Characteristics:</h5>
                          <ul class="text-slate-600 space-y-1 text-sm">
                            <li>• Live directly in wood structures</li>
                            <li>• Don't require soil contact</li>
                            <li>• Leave distinctive pellet droppings</li>
                            <li>• Swarm during humid periods</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-slate-700 mb-2">Common Targets:</h5>
                          <ul class="text-orange-600 space-y-1 text-sm">
                            <li>• Wooden furniture and fixtures</li>
                            <li>• Door and window frames</li>
                            <li>• Roof structures and beams</li>
                            <li>• Hardwood flooring</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-amber-200 pb-2">Advanced Protection Systems</h3>
              
              <div class="space-y-6">
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <h4 class="text-xl font-bold text-blue-800 mb-4">🛡️ Liquid Barrier Treatment</h4>
                  <p class="text-blue-700 mb-4">Create an invisible chemical barrier around your property's foundation that termites cannot cross.</p>
                  
                  <div class="grid md:grid-cols-3 gap-4 mb-4">
                    <div class="bg-white p-4 rounded-lg text-center">
                      <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span class="text-blue-600 font-bold text-lg">1</span>
                      </div>
                      <h5 class="font-semibold text-blue-800 mb-2">Soil Treatment</h5>
                      <p class="text-blue-600 text-sm">Apply termiticide to soil around foundation perimeter</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg text-center">
                      <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span class="text-blue-600 font-bold text-lg">2</span>
                      </div>
                      <h5 class="font-semibold text-blue-800 mb-2">Barrier Creation</h5>
                      <p class="text-blue-600 text-sm">Forms continuous protective zone lasting 5+ years</p>
                    </div>
                    <div class="bg-white p-4 rounded-lg text-center">
                      <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span class="text-blue-600 font-bold text-lg">3</span>
                      </div>
                      <h5 class="font-semibold text-blue-800 mb-2">Long-term Protection</h5>
                      <p class="text-blue-600 text-sm">Prevents new infestations and eliminates existing colonies</p>
                    </div>
                  </div>
                  
                  <div class="bg-blue-100 p-4 rounded-lg">
                    <h5 class="font-semibold text-blue-800 mb-2">Benefits for Jeddah Properties:</h5>
                    <ul class="text-blue-700 space-y-1 text-sm">
                      <li>• Effective in sandy soil conditions</li>
                      <li>• Weather-resistant formulation</li>
                      <li>• Safe for families and pets</li>
                      <li>• Proven 99% effectiveness rate</li>
                    </ul>
                  </div>
                </div>

                <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h4 class="text-xl font-bold text-green-800 mb-4">🎯 Baiting System Technology</h4>
                  <p class="text-green-700 mb-4">Strategic placement of monitoring and baiting stations around your property for targeted colony elimination.</p>
                  
                  <div class="grid md:grid-cols-2 gap-6">
                    <div class="space-y-4">
                      <h5 class="font-semibold text-green-800">How It Works:</h5>
                      <div class="space-y-3">
                        <div class="flex items-start space-x-3">
                          <div class="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-1">1</div>
                          <div>
                            <h6 class="font-medium text-green-800">Detection Phase</h6>
                            <p class="text-green-600 text-sm">Stations monitor for termite activity</p>
                          </div>
                        </div>
                        <div class="flex items-start space-x-3">
                          <div class="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-1">2</div>
                          <div>
                            <h6 class="font-medium text-green-800">Baiting Phase</h6>
                            <p class="text-green-600 text-sm">Active stations loaded with termite bait</p>
                          </div>
                        </div>
                        <div class="flex items-start space-x-3">
                          <div class="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mt-1">3</div>
                          <div>
                            <h6 class="font-medium text-green-800">Elimination Phase</h6>
                            <p class="text-green-600 text-sm">Colony elimination within 2-6 months</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="bg-white p-4 rounded-lg">
                      <h5 class="font-semibold text-green-800 mb-3">System Advantages:</h5>
                      <ul class="text-green-600 space-y-2 text-sm">
                        <li class="flex items-center">
                          <span class="text-green-500 mr-2">✓</span>
                          <span>Minimal chemical usage</span>
                        </li>
                        <li class="flex items-center">
                          <span class="text-green-500 mr-2">✓</span>
                          <span>Targets entire colonies</span>
                        </li>
                        <li class="flex items-center">
                          <span class="text-green-500 mr-2">✓</span>
                          <span>Continuous monitoring</span>
                        </li>
                        <li class="flex items-center">
                          <span class="text-green-500 mr-2">✓</span>
                          <span>Environmentally responsible</span>
                        </li>
                        <li class="flex items-center">
                          <span class="text-green-500 mr-2">✓</span>
                          <span>Ideal for sensitive areas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-amber-200 pb-2">Early Detection Signs</h3>
              
              <div class="bg-red-50 p-6 rounded-xl border border-red-200">
                <h4 class="text-lg font-bold text-red-800 mb-4">🚨 Warning Signs Every Jeddah Homeowner Should Know</h4>
                
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <h5 class="font-semibold text-red-700">Visual Indicators:</h5>
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <span class="text-red-500 mr-2 mt-1">⚠️</span>
                        <div>
                          <span class="font-medium text-red-700">Mud Tubes</span>
                          <p class="text-red-600 text-sm">Pencil-thick tunnels on walls or foundation</p>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-red-500 mr-2 mt-1">⚠️</span>
                        <div>
                          <span class="font-medium text-red-700">Wood Damage</span>
                          <p class="text-red-600 text-sm">Hollow-sounding wood when tapped</p>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-red-500 mr-2 mt-1">⚠️</span>
                        <div>
                          <span class="font-medium text-red-700">Frass (Droppings)</span>
                          <p class="text-red-600 text-sm">Small pellets near wooden structures</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div class="space-y-4">
                    <h5 class="font-semibold text-red-700">Behavioral Signs:</h5>
                    <ul class="space-y-2">
                      <li class="flex items-start">
                        <span class="text-red-500 mr-2 mt-1">⚠️</span>
                        <div>
                          <span class="font-medium text-red-700">Swarming</span>
                          <p class="text-red-600 text-sm">Flying termites around lights (especially during humid weather)</p>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-red-500 mr-2 mt-1">⚠️</span>
                        <div>
                          <span class="font-medium text-red-700">Discarded Wings</span>
                          <p class="text-red-600 text-sm">Small wings near windows or doors</p>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-red-500 mr-2 mt-1">⚠️</span>
                        <div>
                          <span class="font-medium text-red-700">Clicking Sounds</span>
                          <p class="text-red-600 text-sm">Faint sounds from within walls</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div class="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-6 rounded-xl text-center">
              <h4 class="text-xl font-bold mb-3">Protect Your Jeddah Investment Today</h4>
              <p class="mb-4">Don't wait for visible damage. Our comprehensive termite protection plans safeguard your property's value and your family's safety.</p>
              <div class="grid md:grid-cols-3 gap-4 text-sm">
                <div class="bg-white/20 p-3 rounded-lg">
                  <span class="font-semibold">✓ Free Inspection</span>
                  <p class="text-xs mt-1">Comprehensive property assessment</p>
                </div>
                <div class="bg-white/20 p-3 rounded-lg">
                  <span class="font-semibold">✓ 5-Year Warranty</span>
                  <p class="text-xs mt-1">Complete protection guarantee</p>
                </div>
                <div class="bg-white/20 p-3 rounded-lg">
                  <span class="font-semibold">✓ 24/7 Support</span>
                  <p class="text-xs mt-1">Emergency response available</p>
                </div>
              </div>
            </div>
          </div>
        `,
        },
      ],
    },
    ar: {
      sectionTitle: "رؤى خبراء مكافحة الآفات",
      sectionSubtitle: "إرشادات مهنية وحلول مثبتة لتحديات الآفات الفريدة في جدة",
      by: "بواسطة",
      readTime: "وقت القراءة:",
      close: "إغلاق",
      readMore: "اقرأ المقال كاملاً",
      articles: [
        {
          id: 1,
          title: "دليل شامل لمكافحة النمل في مناخ جدة الساحلي",
          excerpt:
            "اكتشف الاستراتيجيات المهنية للقضاء على غزو النمل في بيئة جدة الساحلية الفريدة. تعرف على أنواع النمل المحلية وطرق العلاج المثبتة.",
          image: "/article1.webp",
          author: "م. يوسف العشرى",
          date: "15 ديسمبر 2024",
          full: `
          <div class="space-y-8" dir="rtl">
            <div class="bg-emerald-50 p-6 rounded-xl border-r-4 border-emerald-500">
              <h4 class="text-xl font-semibold text-emerald-800 mb-3">لماذا تواجه جدة تحديات فريدة مع النمل</h4>
              <p class="text-emerald-700 leading-relaxed">موقع جدة الساحلي على البحر الأحمر يخلق ظروفاً مثالية لأنواع مختلفة من النمل. الجمع بين الرطوبة العالية ودرجات الحرارة الدافئة على مدار السنة والتربة الرملية يوفر أرضاً خصبة مثالية لهذه الآفات المستمرة.</p>
            </div>

            <section>
              <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-emerald-200 pb-2">أنواع النمل الشائعة في جدة</h3>
              
              <div class="grid md:grid-cols-2 gap-6 mb-6">
                <div class="bg-white p-5 rounded-lg shadow-md border border-slate-200">
                  <h4 class="text-lg font-semibold text-slate-800 mb-3">🐜 نمل الفرعون</h4>
                  <ul class="text-slate-600 space-y-2">
                    <li>• يزدهر في مناخ جدة الدافئ والرطب</li>
                    <li>• يشكل مستعمرات متعددة بسرعة</li>
                    <li>• ينجذب للأطعمة الحلوة والرطوبة</li>
                    <li>• صعب القضاء عليه بدون علاج مهني</li>
                  </ul>
                </div>
                
                <div class="bg-white p-5 rounded-lg shadow-md border border-slate-200">
                  <h4 class="text-lg font-semibold text-slate-800 mb-3">🐜 نمل الرصيف</h4>
                  <ul class="text-slate-600 space-y-2">
                    <li>• شائع في المناطق الحضرية بجدة</li>
                    <li>• يبني أعشاشه تحت الألواح الخرسانية</li>
                    <li>• نشط خلال ساعات المساء الباردة</li>
                    <li>• يترك أكوام رمل مرئية بالقرب من نقاط الدخول</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 class="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-emerald-200 pb-2">طرق العلاج المهنية</h3>
              
              <div class="space-y-6">
                <div class="bg-gradient-to-l from-blue-50 to-cyan-50 p-6 rounded-xl">
                  <h4 class="text-xl font-semibold text-blue-800 mb-4">🎯 أنظمة الطعوم المستهدفة</h4>
                  <p class="text-blue-700 mb-4">نهجنا المتخصص يستخدم طعوم جل متقدمة مصممة خصيصاً لظروف مناخ جدة.</p>
                  <div class="grid md:grid-cols-3 gap-4">
                    <div class="text-center">
                      <div class="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span class="text-blue-600 font-bold">1</span>
                      </div>
                      <p class="text-sm text-blue-700">وضع استراتيجي بالقرب من مسارات النمل</p>
                    </div>
                    <div class="text-center">
                      <div class="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span class="text-blue-600 font-bold">2</span>
                      </div>
                      <p class="text-sm text-blue-700">القضاء على المستعمرة خلال 7-14 يوم</p>
                    </div>
                    <div class="text-center">
                      <div class="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span class="text-blue-600 font-bold">3</span>
                      </div>
                      <p class="text-sm text-blue-700">حاجز وقاية طويل المدى</p>
                    </div>
                  </div>
                </div>

                <div class="bg-gradient-to-l from-amber-50 to-orange-50 p-6 rounded-xl">
                  <h4 class="text-xl font-semibold text-amber-800 mb-4">🛡️ نظام الدفاع المحيطي</h4>
                  <p class="text-amber-700 mb-4">إنشاء حاجز غير مرئي حول ممتلكاتك في جدة لمنع الإصابات المستقبلية.</p>
                  <ul class="text-amber-700 space-y-2">
                    <li>• علاجات مقاومة للطقس للظروف الساحلية</li>
                    <li>• آمن للعائلات والحيوانات الأليفة</li>
                    <li>• برنامج صيانة ربع سنوي</li>
                    <li>• ضمان رضا 100%</li>
                  </ul>
                </div>
              </div>
            </section>

            <div class="bg-emerald-600 text-white p-6 rounded-xl text-center">
              <h4 class="text-xl font-bold mb-3">تحتاج مكافحة نمل مهنية في جدة؟</h4>
              <p class="mb-4">فنيونا المعتمدون يفهمون تحديات الآفات الفريدة في جدة ويقدمون نتائج مضمونة.</p>
              <div class="flex justify-center space-x-4 text-sm">
                <span>✓ خدمة في نفس اليوم متاحة</span>
                <span>✓ علاجات صديقة للبيئة</span>
                <span>✓ ضمان سنة واحدة</span>
              </div>
            </div>
          </div>
        `,
        },
        {
          id: 2,
          title: "الوقاية الموسمية من الآفات: حماية منزلك في جدة على مدار السنة",
          excerpt:
            "أتقن فن مكافحة الآفات الموسمية في جدة. تعلم متى تكون الآفات المختلفة أكثر نشاطاً وكيفية تحضير منزلك لكل موسم.",
          image: "/article2.webp",
          author: "م. يوسف العشرى",
          date: "10 ديسمبر 2024",
          full: `
          <div class="space-y-8" dir="rtl">
            <div class="bg-gradient-to-l from-purple-50 to-pink-50 p-6 rounded-xl border-r-4 border-purple-500">
              <h4 class="text-xl font-semibold text-purple-800 mb-3">فهم مواسم الآفات في جدة</h4>
              <p class="text-purple-700 leading-relaxed">على عكس المناخات المعتدلة، الدفء على مدار السنة في جدة يعني أن نشاط الآفات لا يتوقف أبداً. ومع ذلك، تجلب المواسم المختلفة تحديات فريدة تتطلب استراتيجيات وقاية محددة.</p>
            </div>

            <section>
              <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-purple-200 pb-2">تقويم نشاط الآفات الموسمي</h3>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-200">
                  <div class="flex items-center mb-4">
                    <div class="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center ml-3">
                      <span class="text-sm font-bold">☀️</span>
                    </div>
                    <h4 class="text-xl font-bold text-red-800">الصيف (يونيو - أغسطس)</h4>
                  </div>
                  <div class="space-y-3">
                    <div class="bg-white p-3 rounded-lg">
                      <h5 class="font-semibold text-red-700 mb-2">ذروة النشاط:</h5>
                      <ul class="text-red-600 text-sm space-y-1">
                        <li>• الصراصير (تبحث عن مناطق باردة ورطبة)</li>
                        <li>• الحشرات الطائرة (العث، الذباب)</li>
                        <li>• النمل (زيادة نشاط البحث عن الطعام)</li>
                      </ul>
                    </div>
                    <div class="bg-red-100 p-3 rounded-lg">
                      <h5 class="font-semibold text-red-800 mb-2">الإجراءات الرئيسية:</h5>
                      <ul class="text-red-700 text-sm space-y-1">
                        <li>• زيادة صيانة التكييف</li>
                        <li>• إغلاق نقاط الدخول</li>
                        <li>• مراقبة مستويات الرطوبة</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                  <div class="flex items-center mb-4">
                    <div class="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center ml-3">
                      <span class="text-sm font-bold">🌊</span>
                    </div>
                    <h4 class="text-xl font-bold text-blue-800">الموسم الرطب (سبتمبر - نوفمبر)</h4>
                  </div>
                  <div class="space-y-3">
                    <div class="bg-white p-3 rounded-lg">
                      <h5 class="font-semibold text-blue-700 mb-2">ذروة النشاط:</h5>
                      <ul class="text-blue-600 text-sm space-y-1">
                        <li>• السمك الفضي وقمل الكتب</li>
                        <li>• النمل الأبيض (موسم التكاثر)</li>
                        <li>• البعوض (زيادة التكاثر)</li>
                      </ul>
                    </div>
                    <div class="bg-blue-100 p-3 rounded-lg">
                      <h5 class="font-semibold text-blue-800 mb-2">الإجراءات الرئيسية:</h5>
                      <ul class="text-blue-700 text-sm space-y-1">
                        <li>• إزالة الرطوبة من مناطق التخزين</li>
                        <li>• فحص النمل الأبيض</li>
                        <li>• القضاء على المياه الراكدة</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class="bg-gradient-to-l from-purple-600 to-pink-600 text-white p-6 rounded-xl text-center">
              <h4 class="text-xl font-bold mb-3">ابق متقدماً على مواسم الآفات في جدة</h4>
              <p class="mb-4">برنامج الحماية الموسمية لدينا يتكيف مع أنماط المناخ الفريدة في جدة، مما يضمن راحة البال على مدار السنة.</p>
              <div class="flex justify-center space-x-4 text-sm">
                <span>✓ علاجات موسمية مخصصة</span>
                <span>✓ حلول خاصة بالمناخ</span>
                <span>✓ وقاية استباقية</span>
              </div>
            </div>
          </div>
        `,
        },
        {
          id: 3,
          title: "حماية من النمل الأبيض لممتلكات جدة: دليل الدفاع الشامل",
          excerpt:
            "احم ممتلكاتك في جدة من أضرار النمل الأبيض باستراتيجيات الحماية الشاملة لدينا. تعرف على أنواع النمل الأبيض المحلية وخيارات العلاج المتقدمة.",
          image: "/article3.webp",
          author: "م. يوسف العشرى",
          date: "5 ديسمبر 2024",
          full: `
          <div class="space-y-8" dir="rtl">
            <div class="bg-gradient-to-l from-amber-50 to-yellow-50 p-6 rounded-xl border-r-4 border-amber-500">
              <h4 class="text-xl font-semibold text-amber-800 mb-3">لماذا يزدهر النمل الأبيض في جدة</h4>
              <p class="text-amber-700 leading-relaxed">مناخ جدة الساحلي، بدفئه المستمر والرطوبة من البحر الأحمر، يخلق ظروفاً مثالية لمستعمرات النمل الأبيض. تركيب التربة الرملية يسمح بالحفر السهل، بينما وفرة المواد السليلوزية في البناء الحديث توفر مصادر غذاء وفيرة.</p>
            </div>

            <section>
              <h3 class="text-2xl font-bold text-slate-800 mb-6 border-b-2 border-amber-200 pb-2">أنواع النمل الأبيض الشائعة في جدة</h3>
              
              <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                  <div class="flex items-start space-x-4">
                    <div class="bg-red-100 p-3 rounded-full">
                      <span class="text-2xl">🐛</span>
                    </div>
                    <div class="flex-1">
                      <h4 class="text-xl font-bold text-red-800 mb-3">النمل الأبيض الجوفي</h4>
                      <div class="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 class="font-semibold text-slate-700 mb-2">الخصائص:</h5>
                          <ul class="text-slate-600 space-y-1 text-sm">
                            <li>• يعيش في مستعمرات تحت الأرض</li>
                            <li>• يبني أنابيب طينية للحماية</li>
                            <li>• أكثر أنواع النمل الأبيض تدميراً</li>
                            <li>• نشط على مدار السنة في مناخ جدة</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-semibold text-slate-700 mb-2">إمكانية الضرر:</h5>
                          <ul class="text-red-600 space-y-1 text-sm">
                            <li>• يمكن أن يدمر الخشب الهيكلي</li>
                            <li>• الضرر غالباً ما يمر دون ملاحظة</li>
                            <li>• المستعمرات يمكن أن تحتوي على الملايين</li>
                            <li>• يسبب أضراراً بمليارات سنوياً</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class="bg-gradient-to-l from-amber-600 to-orange-600 text-white p-6 rounded-xl text-center">
              <h4 class="text-xl font-bold mb-3">احم استثمارك في جدة اليوم</h4>
              <p class="mb-4">لا تنتظر الضرر المرئي. خطط الحماية الشاملة من النمل الأبيض لدينا تحمي قيمة ممتلكاتك وسلامة عائلتك.</p>
              <div class="grid md:grid-cols-3 gap-4 text-sm">
                <div class="bg-white/20 p-3 rounded-lg">
                  <span class="font-semibold">✓ فحص شامل</span>
                  <p class="text-xs mt-1">تقييم شامل للممتلكات</p>
                </div>
                <div class="bg-white/20 p-3 rounded-lg">
                  <span class="font-semibold">✓ ضمان </span>
                  <p class="text-xs mt-1">ضمان حماية كاملة</p>
                </div>
                <div class="bg-white/20 p-3 rounded-lg">
                  <span class="font-semibold">✓ دعم 24/7</span>
                  <p class="text-xs mt-1">استجابة طوارئ متاحة</p>
                </div>
              </div>
            </div>
          </div>
        `,
        },
      ],
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50" id="blog">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 ${language === "ar" ? "rtl" : "ltr"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{content[language].sectionTitle}</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {content[language].sectionSubtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {content[language].articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={280}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                {/* Article Meta */}
                <div
                  className={`flex items-center gap-4 mb-4 text-sm text-slate-500 ${language === "ar" ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-emerald-600" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-emerald-600" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h3
                  className={`text-xl font-bold mb-4 text-slate-800 leading-tight group-hover:text-emerald-700 transition-colors ${language === "ar" ? "text-right" : "text-left"}`}
                >
                  {article.title}
                </h3>

                <p className={`text-slate-600 mb-6 leading-relaxed ${language === "ar" ? "text-right" : "text-left"}`}>
                  {article.excerpt}
                </p>

                <div className={`flex items-center justify-between ${language === "ar" ? "flex-row-reverse" : ""}`}>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className={`inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group/btn ${language === "ar" ? "flex-row-reverse" : ""}`}
                  >
                    <span>{content[language].readMore}</span>
                    <ArrowRight
                      size={16}
                      className={`transition-transform group-hover/btn:translate-x-1 ${language === "ar" ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              className={`bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative ${language === "ar" ? "rtl" : "ltr"}`}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className={`absolute top-6 ${language === "ar" ? "left-6" : "right-6"} z-10 bg-white/90 backdrop-blur-sm text-slate-600 hover:text-slate-900 p-2 rounded-full shadow-lg transition-all hover:shadow-xl`}
                aria-label={content[language].close}
              >
                <X size={24} />
              </button>

              <div className="relative">
                <Image
                  src={selectedArticle.image || "/placeholder.svg"}
                  alt={selectedArticle.title}
                  width={800}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              <div className="p-8 md:p-12">
                {/* Article Meta */}
                <div
                  className={`flex items-center gap-6 mb-6 text-sm text-slate-500 ${language === "ar" ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <User size={18} className="text-emerald-600" />
                    <span className="font-medium">
                      {content[language].by} {selectedArticle.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-emerald-600" />
                    <span>{selectedArticle.date}</span>
                  </div>
                </div>

                <h3
                  className={`text-3xl md:text-4xl font-bold mb-8 text-slate-800 leading-tight ${language === "ar" ? "text-right" : "text-left"}`}
                >
                  {selectedArticle.title}
                </h3>

                <div className={`prose prose-lg max-w-none ${language === "ar" ? "text-right" : "text-left"}`}>
                  <div
                    className="text-slate-700 leading-relaxed text-lg"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.full }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Blog
