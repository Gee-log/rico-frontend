#! /usr/bin/env python

import argparse
import os
import re
import sys

from tempfile import mkstemp
from shutil import move
from os import fdopen, remove

parser = argparse.ArgumentParser(description='Change web url')
parser.add_argument('-l', '--localhost', help='set ip to localhost',
        action='store_true')
parser.add_argument('-i', '--ip', help='host ip')
parser.add_argument('-p', '--port', help='host port', default='8000')

script_path = os.path.dirname(os.path.abspath(__file__))
JS_ROOT_URL = os.path.join(script_path, 'static/webapp/main.bundle.js')
VIEW_CELERY_APP = os.path.join(script_path, 'views.py')
HTTP = 'http://'


def replace_celery_app(domain):

    changed = False

    # Create temp file
    fh, abs_path = mkstemp()
    with fdopen(fh, 'w') as new_file:
        with open(VIEW_CELERY_APP) as old_file:
            for line in old_file:
                if not changed and line.startswith('CELERY_APP'):
                    r_po = line.find('CELERY_APP')
                    s_po = line.find('#')
                    if s_po < 0 or s_po > r_po:
                        line = 'CELERY_APP = "' + domain + 'rico"\n'
                        for i in range(r_po): # put indent
                            line = ' ' + line
                        changed = True
                new_file.write(line)

    # Remove original file
    remove(VIEW_CELERY_APP)
    # Move new file
    move(abs_path, VIEW_CELERY_APP)


def replace_root_url(domain):

    changed = False

    # Create temp file
    fh, abs_path = mkstemp()
    with fdopen(fh, 'w') as new_file:
        with open(JS_ROOT_URL) as old_file:
            for line in old_file:
                if not changed and 'this.ROOT_URL' in line:
                    r_po = line.find('this.ROOT_URL')
                    s_po = line.find('/')
                    if s_po < 0 or s_po > r_po:
                        line = '        this.ROOT_URL = "' + domain + '";\n'
                        changed = True
                new_file.write(line)

    # Remove original file
    remove(JS_ROOT_URL)
    # Move new file
    move(abs_path, JS_ROOT_URL)

if __name__ == '__main__':

    args = parser.parse_args()

    if not args.localhost and not args.ip:
        print('Please set ip (-i)')
        sys.exit()

    if args.localhost:
        domain = HTTP + 'localhost:' + args.port + '/'
    else:
        domain = HTTP + args.ip + ':' + args.port + '/'

    replace_celery_app(domain)
    replace_root_url(domain)

    print ('Changed host to ' + domain)

