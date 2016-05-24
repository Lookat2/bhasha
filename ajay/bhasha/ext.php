<?php
/**
 *
 * This file is written by Ajay Kumar Chaudhary.
 *
 * @package phpBB Extension - Bhasha Parivartan
 * @license GNU General Public License, version 2 (GPL-2.0)
 *
 * For full copyright and license information, contact with developer - ajay@studentforum.co.in
 *
 */
namespace ajay\bhasha;
/**
* Extension class for custom enable/disable/purge actions
*/
class ext extends \phpbb\extension\base
{
	/** @var string Require 3.1.9 due to updated INCLUDECSS syntax */
	const PHPBB_VERSION = '3.1.9';
	/**
	 * Enable extension if phpBB minimum version requirement is met
	 *
	 * @return bool
	 */
	public function is_enableable()
	{
		$config = $this->container->get('config');
		return phpbb_version_compare($config['version'], self::PHPBB_VERSION, '>=');
	}
}